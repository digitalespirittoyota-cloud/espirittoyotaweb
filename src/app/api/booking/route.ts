import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Booking from '@/app/models/Booking';
import { sendEmail, getAdminTemplate, getCustomerTemplate } from '@/app/lib/email';
import { v4 as uuidv4 } from 'uuid';

const generateId = () => {
    return 'BK' + Math.floor(100000 + Math.random() * 900000);
}

export async function POST(req: Request) {
    try {
        await connectDB();

        const body = await req.json();
        const { name, email, phone, carModel, serviceType, date, registrationNumber, message } = body;

        // 1. Validation
        if (!name || !email || !phone || !carModel || !serviceType || !date) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // 2. Rate Limiting
        const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
        const existing = await Booking.findOne({
            email,
            serviceType,
            createdAt: { $gte: oneMinuteAgo }
        });

        if (existing) {
            return NextResponse.json({ message: 'Duplicate submission detected.' }, { status: 429 });
        }

        // 3. Create Booking
        const uniqueId = 'BK' + uuidv4().slice(0, 6).toUpperCase();
        const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';

        await Booking.create({
            name,
            email,
            phone,
            carModel,
            serviceType,
            date,
            registrationNumber,
            message,
            uniqueId,
            ip,
            formType: 'Service Booking',
            status: 'new'
        });

        // 4. Send Emails
        // Admin
        const adminHtml = getAdminTemplate('New Service Booking', {
            Name: name,
            Email: email,
            Phone: phone,
            Model: carModel,
            Service: serviceType,
            Date: date,
            RegNo: registrationNumber,
            Message: message,
            ID: uniqueId
        });

        const adminEmailPromise = sendEmail({
            to: "marketing@fieldtoyota.com",
            subject: `New Service Booking: ${carModel} - ${name}`,
            html: adminHtml
        });

        // Customer
        const customerHtml = getCustomerTemplate(
            name,
            'Service Booking Received',
            `Thank you for booking a service with Espirit Toyota. <br/><br/>
         <strong>Details:</strong><br/>
         Service: ${serviceType}<br/>
         Vehicle: ${carModel}<br/>
         Preferred Date: ${date}<br/><br/>
         Your Booking Reference is <strong>${uniqueId}</strong>. Our service advisor will call you to confirm the appointment.`
        );

        const customerEmailPromise = sendEmail({
            to: email,
            subject: 'Service Booking Confirmation - Espirit Toyota',
            html: customerHtml
        });

        await Promise.allSettled([adminEmailPromise, customerEmailPromise]);

        return NextResponse.json({ message: 'Booking submitted successfully', id: uniqueId }, { status: 201 });

    } catch (error) {
        console.error('Booking API Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
