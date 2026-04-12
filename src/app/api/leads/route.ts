import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

// Simple in-memory rate limit: max 5 submissions per IP per 10 minutes
const rateMap = new Map<string, { count: number; reset: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + 10 * 60 * 1000 });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

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

    // In Cloudflare Pages with next-on-pages, Secrets are in process.env at runtime
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.NEHAMA_EMAILS ?? "kolya95@gmail.com";

    console.log("Lead:", safeName, safePhone, "key:", apiKey ? apiKey.slice(0, 8) + "..." : "MISSING", "to:", toEmail);

    if (apiKey) {
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
      console.log("Resend status:", res.status, JSON.stringify(data));

      // Return Resend result in debug field so we can see it in Network tab
      return NextResponse.json({ ok: true, _debug: { status: res.status, data } });
    }

    console.error("RESEND_API_KEY missing from process.env");
    return NextResponse.json({ ok: true, _debug: { warn: "no_api_key" } });
  } catch (error) {
    console.error("API error:", String(error));
    return NextResponse.json({ error: "Server error", detail: String(error) }, { status: 500 });
  }
}
