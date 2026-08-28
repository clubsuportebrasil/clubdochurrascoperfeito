const GRAPH_VERSION = "v21.0";

export async function sha256Text(value: string): Promise<string> {
  return sha256(value.trim().toLowerCase());
}

async function sha256(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function hashEmail(email?: string | null): Promise<string | undefined> {
  if (!email) return undefined;
  return sha256(email.trim().toLowerCase());
}

export async function hashPhone(phone?: string | null): Promise<string | undefined> {
  if (!phone) return undefined;
  const digits = phone.replace(/\D/g, "");
  if (!digits) return undefined;
  return sha256(digits);
}

export type MetaEvent = {
  event_name: string;
  event_id?: string | undefined;
  event_time?: number | undefined;
  event_source_url?: string | undefined;
  action_source?: "website" | "system_generated";
  user_data?: Record<string, unknown>;
  custom_data?: Record<string, unknown>;
};

export async function sendMetaEvent(event: MetaEvent): Promise<void> {
  const pixelId = process.env["META_PIXEL_ID"] || "2120179718904391";
  const token = process.env["META_CAPI_TOKEN"];
  if (!token) {
    console.warn("Meta CAPI: META_CAPI_TOKEN ausente, evento ignorado");
    return;
  }

  const payload = {
    data: [
      {
        action_source: event.action_source ?? "website",
        event_time: event.event_time ?? Math.floor(Date.now() / 1000),
        ...event,
      },
    ],
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );
    if (!res.ok) {
      console.error("Meta CAPI error:", res.status, await res.text());
    }
  } catch (error) {
    console.error("Meta CAPI request failed:", error);
  }
}
