import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

async function sendTikTokEvent(data: any) {
  const pixelId = process.env['TIKTOK_PIXEL_ID'] || 'DA5NG63C77U8NT7JF0J0';
  const accessToken = process.env['TIKTOK_ACCESS_TOKEN'];

  if (!accessToken) return;

  try {
    await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
      method: 'POST',
      headers: {
        'Access-Token': accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pixel_code: pixelId,
        event: 'CompletePayment',
        event_id: data.id,
        timestamp: new Date().toISOString(),
        context: {
          user: {
            email: data.customer.email,
          },
          ad: {
            callback: data.ad_callback || undefined, // Cakto might pass this
          },
        },
        properties: {
          content_type: 'product',
          contents: [
            {
              content_id: data.product.id,
              content_name: data.product.name,
              quantity: 1,
              price: data.amount,
            }
          ],
          currency: 'BRL',
          value: data.amount,
        },
      }),
    });
  } catch (error) {
    console.error('Failed to send TikTok event:', error);
  }
}

// Esquema de validação para o webhook da Cakto
const caktoWebhookSchema = z.object({
  secret: z.string(),
  event: z.string(),
  data: z.object({
    id: z.string(),
    status: z.string(),
    amount: z.number(),
    customer: z.object({
      name: z.string(),
      email: z.string().email(),
    }),
    product: z.object({
      name: z.string(),
      id: z.string(),
    }),
  }).passthrough(),
});

export const Route = createFileRoute('/api/public/cakto-webhook')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          
          // Validação básica do payload
          const result = caktoWebhookSchema.safeParse(body);
          if (!result.success) {
            console.error('Invalid Cakto Webhook payload:', result.error);
            return new Response('Bad Request', { status: 400 });
          }

          const { secret, event, data } = result.data;

          // Verificação do segredo (armazenado no Lovable Secrets)
          const expectedSecret = process.env['CAKTO_WEBHOOK_SECRET'];
          
          if (!expectedSecret || secret !== expectedSecret) {
            console.warn('Unauthorized Cakto Webhook attempt: secret mismatch');
            return new Response('Unauthorized', { status: 401 });
          }

          // Processamento do evento purchase_approved
          if (event === 'purchase_approved') {
            console.log(`Cakto: Purchase approved for ${data.customer.email} - Order ID: ${data.id}`);
            
            // Validação adicional: Garantir que o status da compra é aprovado conforme o payload da Cakto
            if (data.status !== 'approved' && data.status !== 'paid') {
              console.warn(`Cakto: Event purchase_approved received but status is ${data.status}`);
            }
          }

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        } catch (error) {
          console.error('Cakto Webhook error:', error);
          return new Response('Internal Server Error', { status: 500 });
        }
      },
    },
  },
});
