import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Enquiry from '@/models/Enquiry';

export async function GET() {
    try {
        await connectDB();
        // Fetch all enquiries, sorted by newest first
        const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });
        return NextResponse.json(enquiries);
    } catch (error: any) {
        console.error('Fetch admin enquiries error:', error);
        return NextResponse.json({ 
            message: 'Failed to fetch enquiries', 
            error: process.env.NODE_ENV === 'development' ? error.message : undefined 
        }, { status: 500 });
    }
}
