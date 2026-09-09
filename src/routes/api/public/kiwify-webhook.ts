import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

import { sendMetaEvent, hashEmail, hashPhone, sha256Text } from '@/lib/meta-capi.server';

const PRODUCT_ID = 'clube-churrasco-perfeito';
const PRODUCT_NAME = 'Clube do Churrasco Perfeito';

type Purchase = {
  orderId: string;
  email?: string | undefined;
  phone?: string | undefined;
  name?: string | undefined;
  value: number;
};

async function sendMetaPurchase(p: Purchase) {
  const [firstName, ...rest] = String(p.name ?? '').trim().split(/\s+/).filter(Boolean);
  const lastName = rest.join(' ');
  const em = await hashEmail(p.email);
  const ph = await hashPhone(p.phone);

  await sendMetaEvent({
    event_name: 'Purchase',
    event_id: p.orderId,
    action_source: 'website',
    event_source_url: 'https://clubdochurrascoperfeito.lovable.app/',
    user_data: {
      em: em ? [em] : undefined,
      ph: ph ? [ph] : undefined,
      fn: firstName ? [await sha256Text(firstName)] : undefined,
      ln: lastName ? [await sha256Text(lastName)] : undefined,
      country: [await sha256Text('br')],
      external_id: [await sha256Text(String(p.email ?? p.orderId))],
    },
    custom_data: {
      currency: 'BRL',
      value: p.value,
      content_type: 'product',
      content_ids: [PRODUCT_ID],
      content_name: PRODUCT_NAME,
    },
  });
}

// TikTok Events API — só envia se o token estiver configurado nos Secrets.
// Sem token, o site continua funcionando normalmente (apenas o Pixel do navegador).
async function sendTikTokPurchase(p: Purchase) {
  const pixelId = process.env['TIKTOK_PIXEL_ID'] || 'DAG84ARC77UCRCTVC3OG';
  const accessToken = process.env['TIKTOK_ACCESS_TOKEN'];
  if (!accessToken) {
    console.warn('TikTok Events API: TIKTOK_ACCESS_TOKEN ausente, evento ignorado');
    return;
  }

  try {
    const res = await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
      method: 'POST',
      headers: { 'Access-Token': accessToken, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_source: 'web',
        event_source_id: pixelId,
        data: [
          {
            event: 'CompletePayment',
            event_id: p.orderId,
            event_time: Math.floor(Date.now() / 1000),
            user: {
              email: p.email ? await sha256Text(p.email) : undefined,
              phone: p.phone ? await sha256Text(p.phone.replace(/\D/g, '')) : undefined,
            },
            properties: {
              content_type: 'product',
              contents: [
                { content_id: PRODUCT_ID, content_name: PRODUCT_NAME, quantity: 1, price: p.value },
              ],
              currency: 'BRL',
              value: p.value,
            },
          },
        ],
      }),
    });
    if (!res.ok) {
      console.error('TikTok Events API error:', res.status, await res.text());
    }
  } catch (error) {
    console.error('TikTok Events API request failed:', error);
  }
}

const schema = z
  .object({
    order_id: z.string().optional(),
    order_status: z.string().optional(),
    Customer: z
      .object({
        email: z.string().optional(),
        full_name: z.string().optional(),
        mobile: z.string().optional(),
      })
      .partial()
      .optional(),
    Commissions: z.object({ charge_amount: z.union([z.number(), z.string()]).optional() }).partial().optional(),
  })
  .passthrough();

export const Route = createFileRoute('/api/public/kiwify-webhook')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const url = new URL(request.url);
          const expected = process.env['KIWIFY_WEBHOOK_TOKEN'];
          if (!expected) {
            console.warn('Kiwify webhook: KIWIFY_WEBHOOK_TOKEN não configurado; evento ignorado');
            return new Response('Not configured', { status: 503 });
          }
          const provided =
            url.searchParams.get('token') ??
            request.headers.get('x-kiwify-token') ??
            '';
          if (provided !== expected) {
            return new Response('Unauthorized', { status: 401 });
          }

          const parsed = schema.safeParse(await request.json());
          if (!parsed.success) return new Response('Bad Request', { status: 400 });
          const b = parsed.data;

          const status = String(b.order_status ?? '').toLowerCase();
          if (status !== 'paid' && status !== 'approved') {
            return new Response(JSON.stringify({ ignored: true }), { status: 200 });
          }

          const rawAmount = b.Commissions?.charge_amount;
          const amount = typeof rawAmount === 'string' ? Number(rawAmount) : rawAmount;
          const purchase: Purchase = {
            orderId: String(b.order_id ?? crypto.randomUUID()),
            email: b.Customer?.email,
            phone: b.Customer?.mobile,
            name: b.Customer?.full_name,
            value: Number.isFinite(amount) && amount ? Number(amount) / 100 : 17.9,
          };

          await Promise.all([sendMetaPurchase(purchase), sendTikTokPurchase(purchase)]);

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        } catch (error) {
          console.error('Kiwify webhook error:', error);
          return new Response('Internal Server Error', { status: 500 });
        }
      },
    },
  },
});
