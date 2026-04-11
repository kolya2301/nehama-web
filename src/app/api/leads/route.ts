import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    // Initialize Resend at runtime (not build-time)
    const resend = new Resend(process.env.RESEND_API_KEY);

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

    const lead = {
      name: safeName,
      phone: safePhone,
      message: safeMessage,
      source: safeSource,
      ts: new Date().toISOString(),
    };

    // Send email via Resend
    // "from" uses Resend shared domain until nehama2006.com is verified in Resend
    const emailResult = await resend.emails.send({
      from: "Nehama Website <onboarding@resend.dev>",
      to: process.env.NEHAMA_EMAILS || "nehama2006@gmail.com",
      subject: `🔔 פנייה חדשה מ-${safeName}`,
      html: `
        <h2>פנייה חדשה דרך האתר</h2>
        <p><strong>שם:</strong> ${safeName}</p>
        <p><strong>טלפון:</strong> ${safePhone}</p>
        <p><strong>מקור:</strong> ${safeSource}</p>
        <p><strong>הודעה:</strong></p>
        <p>${safeMessage}</p>
        <p><small>שעה: ${lead.ts}</small></p>
      `,
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    console.log("Lead received and email sent:", lead);
    return NextResponse.json({ ok: true, id: emailResult.data?.id });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
