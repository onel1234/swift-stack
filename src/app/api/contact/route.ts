import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const fullName = `${firstName}${lastName ? " " + lastName : ""}`;

    // Send email TO the Cloudflare custom address
    // Cloudflare Email Routing will forward it to your Gmail
    await transporter.sendMail({
      from: `"SwiftStack Contact Form" <${process.env.GMAIL_USERNAME}>`,
      to: process.env.CONTACT_EMAIL, // contact@swiftstack.digital
      replyTo: `"${fullName}" <${email}>`,
      subject: `New Inquiry from ${fullName}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e5e5e5; border-radius: 16px; overflow: hidden; border: 1px solid #222;">
          <div style="background: linear-gradient(135deg, #06b6d4, #8b5cf6); padding: 32px 24px;">
            <h1 style="margin: 0; font-size: 22px; color: #fff;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 32px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #999; font-size: 13px; vertical-align: top; width: 120px;">Name</td>
                <td style="padding: 12px 0; color: #e5e5e5; font-size: 15px;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #999; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 12px 0; color: #06b6d4; font-size: 15px;"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #999; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 24px; background: #111; border-top: 1px solid #222; text-align: center;">
            <p style="margin: 0; color: #666; font-size: 12px;">Sent via SwiftStack Contact Form</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
