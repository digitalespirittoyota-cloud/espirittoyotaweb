import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, phone, model, serviceType, date, message, registrationNumber } = await req.json();

        // Check for required fields
        if (!name || !email || !phone || !model || !serviceType || !date) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // 1. Admin Email Options
        const adminMailOptions = {
            from: process.env.GMAIL_USER,
            to: "marketing@fieldtoyota.com", // Admin email
            subject: `New Service Booking: ${serviceType} - ${model}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #d71920; padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">New Service Booking Request</h2>
          </div>
          <div style="padding: 20px; background-color: #f9f9f9;">
            <p style="font-size: 16px; color: #333;"><strong>Hello Service Team,</strong></p>
            <p style="font-size: 16px; color: #333;">You have received a new service booking request.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #555; width: 35%;">Customer Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #333;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #333;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #555;">Vehicle Model:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #333; font-weight: bold;">${model}</td>
              </tr>
               <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #555;">Registration No:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #333;">${registrationNumber || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #555;">Service Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #d71920; font-weight: bold;">${serviceType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #555;">Preferred Date:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #333;">${date}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #555; vertical-align: top;">Additional Message:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #333;">${message || 'N/A'}</td>
              </tr>
            </table>

            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${email}" style="background-color: #d71920; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply via Email</a>
              <span style="margin: 0 10px;">or</span>
              <a href="tel:${phone}" style="background-color: #333333; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Call Customer</a>
            </div>
          </div>
        </div>
      `,
        };

        // 2. User Confirmation Email Options
        const userMailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: `Service Booking Request Received - Espirit Toyota`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #d71920; padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">Booking Received</h2>
          </div>
          <div style="padding: 20px; background-color: #ffffff;">
            <p style="font-size: 18px; color: #333;"><strong>Dear ${name},</strong></p>
            <p style="font-size: 16px; color: #555; line-height: 1.6;">
              Thank you for choosing Espirit Toyota Service. We have received your booking request for <strong>${serviceType}</strong> for your <strong>${model}</strong>.
            </p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #d71920; margin: 20px 0;">
              <p style="margin: 0; color: #333;"><strong>Requested Date:</strong> ${date}</p>
              <p style="margin: 5px 0 0; color: #555;">Ref Code: #SRV${Math.floor(1000 + Math.random() * 9000)}</p>
            </div>

            <p style="font-size: 16px; color: #555;">
              Our service advisor will confirm your appointment shortly. If you have any urgent queries, please call us at <strong>+91 79354 28989</strong>.
            </p>
            
            <div style="margin-top: 30px; text-align: center;">
              <a href="https://www.toyota-espirit.in" style="background-color: #333; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Website</a>
            </div>
          </div>
          <div style="background-color: #eeeeee; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            <p><strong>Espirit Toyota</strong><br>Bhubaneswar, Odisha</p>
            <p>Service Helpline: +91 79354 28989</p>
            <p>&copy; ${new Date().getFullYear()} Espirit Toyota. All rights reserved.</p>
          </div>
        </div>
      `,
        };

        // Send Both Emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        return NextResponse.json(
            { message: 'Service booking submitted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending service email:', error);
        return NextResponse.json(
            { message: 'Failed to submit booking' },
            { status: 500 }
        );
    }
}
