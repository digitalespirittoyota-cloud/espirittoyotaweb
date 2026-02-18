import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // Make sure this is an App Password
    },
});

interface EmailOptions {
    to: string;
    subject: string;
    html: string;
}

export const sendEmail = async (options: EmailOptions) => {
    const mailOptions = {
        from: process.env.GMAIL_USER,
        ...options,
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};


// --- Dynamic HTML Templates ---

export const getAdminTemplate = (title: string, data: any) => {
    const rows = Object.entries(data).map(([key, value]) => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; color: #555; text-transform: capitalize;">${key.replace(/([A-Z])/g, ' $1')}:</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #333;">${value || '-'}</td>
    </tr>
  `).join('');

    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #d71920; padding: 20px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0;">${title}</h2>
      </div>
      <div style="padding: 20px; background-color: #f9f9f9;">
        <p style="font-size: 16px; color: #333;"><strong>Hello Team,</strong></p>
        <p style="font-size: 16px; color: #333;">New submission received from website.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          ${rows}
        </table>
      </div>
       <div style="background-color: #eeeeee; padding: 10px; text-align: center; font-size: 12px; color: #777;">
        <p>&copy; ${new Date().getFullYear()} Espirit Toyota. All rights reserved.</p>
      </div>
    </div>
  `;
};

export const getCustomerTemplate = (name: string, subject: string, message: string) => {
    // This is a generic customer acknowledgement
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #d71920; padding: 20px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0;">${subject}</h2>
      </div>
      <div style="padding: 20px; background-color: #ffffff;">
        <p style="font-size: 18px; color: #333;"><strong>Dear ${name},</strong></p>
        <p style="font-size: 16px; color: #555; line-height: 1.6;">
          ${message}
        </p>
        <div style="margin-top: 30px; text-align: center;">
          <a href="https://www.toyota-espirit.in" style="background-color: #333; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Website</a>
        </div>
      </div>
      <div style="background-color: #eeeeee; padding: 15px; text-align: center; font-size: 12px; color: #777;">
        <p><strong>Espirit Toyota</strong><br>Bhubaneswar, Odisha</p>
        <p>Contact: +91 79354 28989 | Email: marketing@fieldtoyota.com</p>
      </div>
    </div>
  `;
}
