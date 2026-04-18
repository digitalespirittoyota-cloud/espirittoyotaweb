import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Bid from '@/models/Bid';
import { sendEmail, getAdminTemplate, getCustomerTemplate } from '@/app/lib/email';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
    try {
        await connectDB();

        // Parse Body
        const { name, email, phone, carModel, city, carId, bidPrice, purchaseTimeline, purchaseMode } = await req.json();

        // 1. Validation
        if (!name || !phone || !carId || !bidPrice) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // 2. Prevent Duplicates (Simple Rate Limiting by Phone + CarId within last 5 mins)
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
        const existingEntry = await Bid.findOne({
            phone,
            carId,
            createdAt: { $gte: fiveMinutesAgo }
        });

        if (existingEntry) {
            return NextResponse.json({ message: 'Bid received already. Please wait a moment.' }, { status: 429 });
        }

        // 3. Create Entry
        const uniqueId = uuidv4().slice(0, 8).toUpperCase();
        const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';

        const newBid = await Bid.create({
            name,
            email,
            phone,
            uniqueId,
            ip,
            status: 'new',
            carModel,
            city,
            carId,
            bidPrice,
            purchaseTimeline,
            purchaseMode,
        });

        // 4. Send Emails
        const adminHtml = getAdminTemplate(`New Bid Received`, {
            Name: name,
            Email: email || 'N/A',
            Phone: phone,
            Vehicle: carModel,
            'Bid Price': `₹${bidPrice}`,
            Timeline: purchaseTimeline,
            'Payment Mode': purchaseMode,
            ID: uniqueId,
        });

        const adminEmail = process.env.ADMIN_USER;
        if (adminEmail) {
            await sendEmail({
                to: adminEmail,
                subject: `[BID] New Bid: ₹${bidPrice} for ${carModel}`,
                html: adminHtml
            }).catch(err => console.error('Admin email error:', err));
        }

        if (email) {
            const customerHtml = getCustomerTemplate(
                name,
                `Bid Submitted Successfully`,
                `Thank you for your interest in the <strong>${carModel}</strong>. We have received your bid of <strong>₹${bidPrice}</strong>. <br/><br/> Your Reference ID is <strong>${uniqueId}</strong>. Our team will review your offer and connect with you shortly.`
            );
            await sendEmail({
                to: email,
                subject: `Espirit Toyota: Bid Confirmation`,
                html: customerHtml
            }).catch(err => console.error('Customer email error:', err));
        }

        return NextResponse.json({ message: 'Bid submitted successfully', id: uniqueId }, { status: 201 });

    } catch (error: any) {
        console.error('Bidding API Error:', error);
        return NextResponse.json({
            message: 'Internal Server Error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        }, { status: 500 });
    }
}
