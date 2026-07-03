import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "RABNEXUS <hello@rabnexus.com>",
      to: ["hello@rabnexus.com"],
      subject: `✉️ Inquiry: ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #fff; padding: 40px;">
          <div style="max-width: 520px; margin: 0 auto; border: 1px solid rgba(212,255,0,0.2); border-radius: 8px; padding: 32px; background: #121212;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <div style="width: 12px; height: 12px; background: #d4ff00; border-radius: 2px;"></div>
              <span style="color: #d4ff00; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;">RABNEXUS — New Inquiry</span>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr><td style="color: #666; padding: 8px 0;">Name</td><td style="color: #fff; padding: 8px 0;">${name}</td></tr>
              <tr><td style="color: #666; padding: 8px 0;">Email</td><td style="color: #fff; padding: 8px 0;">${email}</td></tr>
              <tr><td style="color: #666; padding: 8px 0;">Company</td><td style="color: #fff; padding: 8px 0;">${company || "—"}</td></tr>
              <tr><td style="color: #666; padding: 8px 0;">Service</td><td style="color: #fff; padding: 8px 0;">${service}</td></tr>
              <tr><td style="color: #666; padding: 8px 0;">Budget</td><td style="color: #fff; padding: 8px 0;">${budget}</td></tr>
            </table>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
              <p style="color: #666; font-size: 11px; margin: 0 0 8px;">MESSAGE</p>
              <p style="color: #ccc; font-size: 13px; line-height: 1.6; margin: 0;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation to the user
    const { error: confirmError } = await resend.emails.send({
      from: "RABNEXUS <hello@rabnexus.com>",
      to: [email],
      subject: `✅ Inquiry Received — RABNEXUS`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #fff; padding: 40px;">
          <div style="max-width: 520px; margin: 0 auto; border: 1px solid rgba(212,255,0,0.2); border-radius: 8px; padding: 32px; background: #121212;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <div style="width: 12px; height: 12px; background: #d4ff00; border-radius: 2px;"></div>
              <span style="color: #d4ff00; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;">RABNEXUS — We Received Your Inquiry</span>
            </div>
            <p style="color: #ccc; font-size: 14px; line-height: 1.6;">Hi ${name},</p>
            <p style="color: #999; font-size: 13px; line-height: 1.6;">Thank you for reaching out. Our executive architects will review your requirements and respond within <strong style="color: #fff;">24 operational hours</strong>.</p>
            <p style="color: #999; font-size: 13px; line-height: 1.6;">Here&rsquo;s what you submitted for reference:</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0;">
              <tr><td style="color: #666; padding: 8px 0;">Service</td><td style="color: #fff; padding: 8px 0;">${service}</td></tr>
              <tr><td style="color: #666; padding: 8px 0;">Budget</td><td style="color: #fff; padding: 8px 0;">${budget}</td></tr>
            </table>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
              <span style="color: #666; font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;">RABNEXUS — High-Precision Digital Engines</span>
            </div>
          </div>
        </div>
      `,
    });

    if (error || confirmError) {
      console.error("Resend error:", error ?? confirmError);
      return Response.json({ error: "Failed to send inquiry" }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
