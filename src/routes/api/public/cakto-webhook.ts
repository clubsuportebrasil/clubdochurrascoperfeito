import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

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
