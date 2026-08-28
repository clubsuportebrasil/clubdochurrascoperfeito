import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { sendMetaEvent, hashEmail, hashPhone, sha256Text } from "@/lib/meta-capi.server";

const bodySchema = z.object({
  event_name: z.enum([
    "PageView",
    "ViewContent",
    "AddToCart",
    "InitiateCheckout",
    "AddPaymentInfo",
    "Purchase",
  ]),
  event_id: z.string().max(120).optional(),
  event_source_url: z.string().url().optional(),
  value: z.number().optional(),
  currency: z.string().max(5).optional(),
  content_id: z.string().max(120).optional(),
  content_name: z.string().max(200).optional(),
  email: z.string().email().optional(),
  phone: z.string().max(30).optional(),
  fbp: z.string().max(120).optional(),
  fbc: z.string().max(300).optional(),
});

function clientIp(request: Request): string | undefined {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("cf-connecting-ip") ?? undefined;
}

export const Route = createFileRoute("/api/public/meta-capi")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const parsed = bodySchema.safeParse(await request.json());
          if (!parsed.success) {
            return new Response("Bad Request", { status: 400 });
          }
          const b = parsed.data;

          await sendMetaEvent({
            event_name: b.event_name,
            event_id: b.event_id,
            event_source_url: b.event_source_url ?? request.headers.get("referer") ?? undefined,
            action_source: "website",
            user_data: {
              client_user_agent: request.headers.get("user-agent") ?? undefined,
              client_ip_address: clientIp(request),
              fbp: b.fbp,
              fbc: b.fbc,
              country: [await sha256Text("br")],
              em: (await hashEmail(b.email)) ? [await hashEmail(b.email)] : undefined,
              ph: (await hashPhone(b.phone)) ? [await hashPhone(b.phone)] : undefined,
            },
            custom_data: {
              currency: b.currency ?? "BRL",
              value: b.value ?? 17.9,
              content_type: "product",
              content_ids: b.content_id ? [b.content_id] : undefined,
              content_name: b.content_name,
            },
          });

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("Meta CAPI route error:", error);
          return new Response("Internal Server Error", { status: 500 });
        }
      },
    },
  },
});
