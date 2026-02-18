import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Enquiry from '@/app/models/Enquiry';
import { sendEmail, getAdminTemplate, getCustomerTemplate } from '@/app/lib/email';
import { v4 as uuidv4 } from 'uuid'; // You might need to install uuid or just use Math.random

// Simple unique ID generator if uuid not installed
const generateId = () => {
    return 'EQ' + Math.floor(100000 + Math.random() * 900000);
}

export async function POST(req: Request) {
    try {
        await connectDB();

        // Parse Body
        const body = await req.json();
        const { name, email, phone, formType, ...otherData } = body;

        // 1. Validation
        if (!name || !email || !phone || !formType) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // 2. Prevent Duplicates (Simple Rate Limiting by Email + FormType within last 1 min)
        const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
        const existingEntry = await Enquiry.findOne({
            email,
            formType,
            createdAt: { $gte: oneMinuteAgo }
        });

        if (existingEntry) {
            return NextResponse.json({ message: 'Submission received already. Please wait a moment.' }, { status: 429 });
        }

        // 3. Create Entry
        const uniqueId = uuidv4().slice(0, 8).toUpperCase(); // Short readable UUID
        const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';

        const newEnquiry = await Enquiry.create({
            name,
            email,
            phone,
            formType,
            uniqueId,
            ip,
            source: 'website',
            status: 'new',
            ...otherData
        });

        // 4. Send Emails
        // Admin Email
        const adminHtml = getAdminTemplate(`New ${formType} Received`, {
            Name: name,
            Email: email,
            Phone: phone,
            Type: formType,
            ID: uniqueId,
            Vehicle: otherData.carModel || 'N/A',
            ...otherData
        });

        const adminEmailPromise = sendEmail({
            to: "marketing@fieldtoyota.com",
            subject: `[${formType}] New Submission from ${name}`,
            html: adminHtml
        });

        // Customer Email
        const customerHtml = getCustomerTemplate(
            name,
            `We Received your ${formType} Request`,
            `Thank you for contacting Espirit Toyota. We have received your query regarding <strong>${otherData.carModel || formType}</strong>. <br/><br/> Your Reference ID is <strong>${uniqueId}</strong>. Our team will connect with you shortly.`
        );

        const customerEmailPromise = sendEmail({
            to: email,
            subject: `Thank you for contacting Espirit Toyota`,
            html: customerHtml
        });

        // Execute email sending in background (don't block response too long, but wait ensures reliability)
        await Promise.allSettled([adminEmailPromise, customerEmailPromise]);

        return NextResponse.json({ message: 'Submitted successfully', id: uniqueId }, { status: 201 });

    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json({
            message: 'Internal Server Error',
            error: error.message,
            stack: error.stack
        }, { status: 500 });
    }
}
