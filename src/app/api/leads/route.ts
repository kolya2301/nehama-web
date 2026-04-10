import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, message, source } = body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Sanitize
    const safeName = String(name).slice(0, 100);
    const safePhone = String(phone).replace(/[^\d\+\-\s\(\)]/g, "").slice(0, 20);
    const safeMessage = String(message || "").slice(0, 1000);
    const safeSource = ["homepage", "product_page", "contact_page"].includes(source)
      ? source
      : "unknown";

    // TODO Phase 1: store in DB (Neon Postgres via Cloudflare Hyperdrive)
    // For now: send email notification via Resend
    const lead = { name: safeName, phone: safePhone, message: safeMessage, source: safeSource, ts: new Date().toISOString() };
    console.log("New lead:", lead);

    // TODO: replace with actual Resend email call
    // await resend.emails.send({ from: "leads@nehama2006.com", to: ["nehama2006@gmail.com", "nehama2006r@gmail.com"], subject: `פנייה חדשה מ-${safeName}`, text: `...` })

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
