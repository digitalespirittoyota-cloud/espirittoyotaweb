import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, phone, email, model } = await req.json();

        if (!name || !phone || !email || !model) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // =====================
        // 📩 Admin Email Template
        // =====================
        const adminTemplate = `
    <!DOCTYPE html>
    <html>
      <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f9f9f9;">
        <div style="max-width:600px;margin:auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 8px rgba(0,0,0,0.1);">
          <div style="background:#d50000;padding:16px;text-align:center;">
            <h2 style="color:#fff;margin:0;">New Test Drive Booking</h2>
          </div>
          <div style="padding:20px;color:#333;">
            <p style="font-size:16px;">Dear Admin,</p>
            <p style="font-size:16px;">A new test drive booking has been received.</p>
            <table style="width:100%;border-collapse:collapse;margin-top:15px;">
              <tr>
                <td style="padding:8px;border:1px solid #eee;"><b>Name</b></td>
                <td style="padding:8px;border:1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px;border:1px solid #eee;"><b>Phone</b></td>
                <td style="padding:8px;border:1px solid #eee;">${phone}</td>
              </tr>
              <tr>
                <td style="padding:8px;border:1px solid #eee;"><b>Email</b></td>
                <td style="padding:8px;border:1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding:8px;border:1px solid #eee;"><b>Model</b></td>
                <td style="padding:8px;border:1px solid #eee;">${model}</td>
              </tr>
            </table>
            <p style="margin-top:20px;font-size:14px;color:#777;">
              Please contact the customer at the earliest to confirm the booking.
            </p>
          </div>
          <div style="background:#f1f1f1;padding:12px;text-align:center;">
            <p style="font-size:13px;color:#666;margin:0;">
              © ${new Date().getFullYear()} Toyota India | Internal Notification
            </p>
          </div>
        </div>
      </body>
    </html>
    `;

        // =====================
        // 📩 Customer Email Template
        // =====================
        const customerTemplate = `
    <!DOCTYPE html>
    <html>
      <body style="margin:0;padding:0;font-family:'Segoe UI',Tahoma,sans-serif;background:#f5f5f5;">
        <div style="max-width:600px;margin:auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 8px rgba(0,0,0,0.1);">
          <div style="background:#d50000;padding:16px;text-align:center;">
            <h2 style="color:#fff;margin:0;">Thank You for Choosing Toyota</h2>
          </div>
          <div style="padding:25px;color:#333;">
            <h3 style="color:#d50000;">Hi ${name},</h3>
            <p style="font-size:16px;">
              We have received your request for a <b>${model}</b> test drive.
            </p>
            <p style="font-size:16px;">
              Our team will get in touch with you shortly on <b>${phone}</b> or
              <b>${email}</b>.
            </p>
            <div style="margin:20px 0;padding:15px;background:#fef2f2;border-left:5px solid #d50000;border-radius:4px;">
              <p style="margin:0;font-size:15px;">
                 <b>Next Steps:</b> Our representative will call you to confirm
                the test drive schedule.
              </p>
            </div>
            <p style="font-size:15px;">
              In case of queries, feel free to reply to this email.
            </p>
            <p style="margin-top:20px;font-size:16px;color:#333;">
              Warm Regards,<br />
              <b>Toyota Team</b>
            </p>
          </div>
          <div style="background:#f1f1f1;padding:12px;text-align:center;">
            <p style="font-size:13px;color:#666;margin:0;">
              © ${new Date().getFullYear()} Toyota India. All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </html>
    `;

        // ✅ Send Admin Email
        await transporter.sendMail({
            from: `"Toyota Website" <${process.env.GMAIL_USER}>`,
            to: "marketing@fieldtoyota.com",
            subject: " New Toyota Test Drive Booking",
            html: adminTemplate,
        });

        // ✅ Send Customer Email
        await transporter.sendMail({
            from: `"Toyota India" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: "Thank you for booking a Toyota Test Drive",
            html: customerTemplate,
        });

        return NextResponse.json({ message: "Emails sent successfully" });
    } catch (error) {
        console.error("Email sending failed:", error);
        return NextResponse.json(
            { message: "Failed to send emails", error },
            { status: 500 }
        );
    }
}
