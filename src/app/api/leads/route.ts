import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, message, source } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const safeName = String(name).slice(0, 100);
    const safePhone = String(phone).replace(/[^\d\+\-\s\(\)]/g, "").slice(0, 20);
    const safeMessage = String(message || "").slice(0, 1000);
    const safeSource = ["homepage", "product_page", "contact_page"].includes(source)
      ? source
      : "unknown";

    // Server-side phone validation — Israeli numbers only
    const phoneDigits = safePhone.replace(/\D/g, "");
    if (phoneDigits.length < 9 || phoneDigits.length > 10 || !phoneDigits.startsWith("0")) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
    }

    // Read env vars via Cloudflare context (works for Secrets too)
    const env = getRequestContext().env as Record<string, string | undefined>;
    const apiKey = env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
    const toEmail = env.NEHAMA_EMAILS ?? process.env.NEHAMA_EMAILS ?? "kolya95@gmail.com";

    console.log("Lead:", safeName, safePhone, "| key:", !!apiKey, "| to:", toEmail);

    if (apiKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Nehama <onboarding@resend.dev>",
            to: toEmail,
            subject: `פנייה חדשה מ-${safeName}`,
            html: `
              <h2>פנייה חדשה דרך האתר</h2>
              <p><strong>שם:</strong> ${safeName}</p>
              <p><strong>טלפון:</strong> ${safePhone}</p>
              <p><strong>מקור:</strong> ${safeSource}</p>
              <p><strong>הודעה:</strong> ${safeMessage}</p>
              <p><small>${new Date().toISOString()}</small></p>
            `,
          }),
        });
        const data = await res.json() as Record<string, unknown>;
        console.log("Resend:", res.status, JSON.stringify(data));
      } catch (e) {
        console.error("Resend error:", e);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
