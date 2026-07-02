import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, date, timeSlot } = body;

    if (!name || !email || !service || !date || !timeSlot) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "RABNIX <hello@rabnix.com>",
      to: ["hello@rabnix.com"],
      subject: `📅 Booking: ${name} — ${service}`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #fff; padding: 40px;">
          <div style="max-width: 520px; margin: 0 auto; border: 1px solid rgba(212,255,0,0.2); border-radius: 8px; padding: 32px; background: #121212;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <div style="width: 12px; height: 12px; background: #d4ff00; border-radius: 2px;"></div>
              <span style="color: #d4ff00; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;">RABNIX — Booking Received</span>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr><td style="color: #666; padding: 8px 0;">Name</td><td style="color: #fff; padding: 8px 0;">${name}</td></tr>
              <tr><td style="color: #666; padding: 8px 0;">Email</td><td style="color: #fff; padding: 8px 0;">${email}</td></tr>
              <tr><td style="color: #666; padding: 8px 0;">Service</td><td style="color: #fff; padding: 8px 0;">${service}</td></tr>
              <tr><td style="color: #666; padding: 8px 0;">Date</td><td style="color: #fff; padding: 8px 0;">${date}</td></tr>
              <tr><td style="color: #666; padding: 8px 0;">Time</td><td style="color: #fff; padding: 8px 0;">${timeSlot}</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    // Send confirmation to the user
    const { error: confirmError } = await resend.emails.send({
      from: "RABNIX <hello@rabnix.com>",
      to: [email],
      subject: `✅ Booking Confirmed — ${service} with RABNIX`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #fff; padding: 40px;">
          <div style="max-width: 520px; margin: 0 auto; border: 1px solid rgba(212,255,0,0.2); border-radius: 8px; padding: 32px; background: #121212;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <div style="width: 12px; height: 12px; background: #d4ff00; border-radius: 2px;"></div>
              <span style="color: #d4ff00; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;">RABNIX — Your Booking is Confirmed</span>
            </div>
            <p style="color: #ccc; font-size: 14px; line-height: 1.6;">Hi ${name},</p>
            <p style="color: #999; font-size: 13px; line-height: 1.6;">Thank you for booking a session with us. Here&rsquo;s a summary of your appointment:</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0;">
              <tr><td style="color: #666; padding: 8px 0;">Service</td><td style="color: #fff; padding: 8px 0;">${service}</td></tr>
              <tr><td style="color: #666; padding: 8px 0;">Date</td><td style="color: #fff; padding: 8px 0;">${date}</td></tr>
              <tr><td style="color: #666; padding: 8px 0;">Time</td><td style="color: #fff; padding: 8px 0;">${timeSlot}</td></tr>
            </table>
            <p style="color: #999; font-size: 13px; line-height: 1.6;">Our team will review your request and reach out to confirm shortly. If you have any questions, reply to this email.</p>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
              <span style="color: #666; font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;">RABNIX — High-Precision Digital Engines</span>
            </div>
          </div>
        </div>
      `,
    });

    if (error || confirmError) {
      console.error("Resend error:", error ?? confirmError);
      return Response.json({ error: "Failed to send booking" }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Booking API error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
