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
            console.warn('Unauthorized Cakto Webhook attempt');
            return new Response('Unauthorized', { status: 401 });
          }

          // Processamento do evento purchase_approved
          if (event === 'purchase_approved') {
            console.log(`Cakto: Purchase approved for ${data.customer.email} - Order ID: ${data.id}`);
            // Aqui você pode adicionar lógica para:
            // 1. Enviar email de acesso (se não for via plataforma)
            // 2. Salvar no banco de dados
            // 3. Integrar com CRM
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
