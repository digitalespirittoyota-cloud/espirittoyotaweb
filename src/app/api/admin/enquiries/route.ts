import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Enquiry from '@/models/Enquiry';
import { getServerSession } from '@/app/lib/auth';

export async function GET(req: Request) {
    try {
        // 1. Internal Security Check (Defense-in-depth)
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        // 2. Role-Based Access Control
        if (session.role === 'bidding') {
            return NextResponse.json({ message: 'Forbidden: Access restricted to Admin or Marketing' }, { status: 403 });
        }

        await connectDB();

        // 3. Pagination & Query Parsing
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '50');
        const skip = (page - 1) * limit;

        // Fetch enquiries with projection (excluding heavy fields if any)
        const enquiries = await Enquiry.find({ 
            formType: { $in: ['General Enquiry', 'Car Enquiry', 'Bidding Enquiry'] } 
        })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

        const totalEntries = await Enquiry.countDocuments({ 
            formType: { $in: ['General Enquiry', 'Car Enquiry', 'Bidding Enquiry'] } 
        });

        return NextResponse.json({
            data: enquiries,
            pagination: {
                total: totalEntries,
                page,
                limit,
                totalPages: Math.ceil(totalEntries / limit)
            }
        });
    } catch (error: any) {
        console.error('Fetch admin enquiries error:', error);
        return NextResponse.json({ 
            message: 'Failed to fetch enquiries', 
            error: process.env.NODE_ENV === 'development' ? error.message : undefined 
        }, { status: 500 });
    }
}
