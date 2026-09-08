import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// FROM must be on a domain verified in your Resend dashboard.
// TO can be any real inbox — no verification needed on the receiving side.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL; // e.g. "Tabassamu Website <noreply@codehubor.co.ke>"
const TO_EMAIL = process.env.CONTACT_TO_EMAIL;      // e.g. "info@tabassamulogistics.co.ke" or the owner's real inbox

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, origin, destination, cargo, message, website } = body;

    // Honeypot: a hidden field real visitors never fill in, but bots do.
    // Pretend success so bots don't learn to look elsewhere.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, phone, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !FROM_EMAIL || !TO_EMAIL) {
      console.error("Contact form error: missing RESEND_API_KEY, CONTACT_FROM_EMAIL, or CONTACT_TO_EMAIL");
      return NextResponse.json(
        { ok: false, error: "Something went wrong. Please try WhatsApp instead." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject: `New quote request from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : null,
        origin ? `Origin: ${origin}` : null,
        destination ? `Destination: ${destination}` : null,
        cargo ? `Cargo details: ${cargo}` : null,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try WhatsApp instead." },
      { status: 500 }
    );
  }
}
