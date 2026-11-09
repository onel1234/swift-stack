import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(input: unknown): string {
  const str = String(input ?? '');
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const firstName = typeof body?.firstName === 'string' ? body.firstName.trim() : '';
    const lastName = typeof body?.lastName === 'string' ? body.lastName.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const phone = typeof body?.phone === 'string' ? body.phone.trim() : '';
    const serviceType = typeof body?.serviceType === 'string' ? body.serviceType.trim() : '';
    const budgetRange = typeof body?.budgetRange === 'string' ? body.budgetRange.trim() : '';
    const currency = typeof body?.currency === 'string' ? body.currency.trim() : '';
    const sourcePage = typeof body?.sourcePage === 'string' ? body.sourcePage.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Full name, valid email address, and project details are required.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!process.env.GMAIL_USERNAME || !process.env.GMAIL_APP_PASSWORD || !process.env.CONTACT_EMAIL) {
      console.error('Contact form SMTP environment variables are not configured.');
      return NextResponse.json(
        { error: 'Enquiry email service is temporarily unavailable. Please reach out on WhatsApp or email contact@swiftstack.digital.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const fullName = `${firstName}${lastName ? ` ${lastName}` : ''}`;
    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || 'Not provided');
    const safeService = escapeHtml(serviceType || 'General enquiry');
    const safeBudget = escapeHtml(
      budgetRange ? `${budgetRange}${currency ? ` (${currency})` : ''}` : 'Not specified'
    );
    const safeSource = escapeHtml(sourcePage || '/');
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');

    await transporter.sendMail({
      from: `"Swift Stack Lead Form" <${process.env.GMAIL_USERNAME}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: `"${fullName.replace(/["\r\n]/g, '')}" <${email.replace(/[\r\n]/g, '')}>`,
      subject: `[Lead] ${serviceType || 'Project Estimate'} from ${fullName}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #0a0a0a; color: #e5e5e5; border-radius: 16px; overflow: hidden; border: 1px solid #222;">
          <div style="background: linear-gradient(135deg, #2563c9, #38bdf8); padding: 28px 24px;">
            <p style="margin: 0 0 6px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: rgba(255,255,255,0.85);">Swift Stack Digital</p>
            <h1 style="margin: 0; font-size: 21px; color: #ffffff;">New Project Quotation Request</h1>
          </div>
          <div style="padding: 28px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top; width: 135px;">Client Name</td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 15px; font-weight: 600;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; font-size: 15px;"><a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Phone / WhatsApp</td>
                <td style="padding: 10px 0; color: #e5e5e5; font-size: 15px;">${safePhone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Service Needed</td>
                <td style="padding: 10px 0; color: #38bdf8; font-size: 15px; font-weight: 600;">${safeService}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Estimated Budget</td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 15px;">${safeBudget}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Source Page</td>
                <td style="padding: 10px 0; color: #cbd5e1; font-size: 14px;">${safeSource}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Project Details</td>
                <td style="padding: 12px 0; color: #e5e5e5; font-size: 15px; line-height: 1.6;">${safeMessage}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 14px 24px; background: #111827; border-top: 1px solid #1f2937; text-align: center;">
            <p style="margin: 0; color: #94a3b8; font-size: 12px;">Submitted from www.swiftstack.digital Lead Funnel</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try WhatsApp or email contact@swiftstack.digital directly.' },
      { status: 500 }
    );
  }
}
