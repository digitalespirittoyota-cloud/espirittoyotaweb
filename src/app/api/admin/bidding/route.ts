import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Bid from '@/models/Bid';
import { getServerSession } from '@/app/lib/auth';

export async function GET(req: Request) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        // Only Admin and Bidding can see bids
        if (session.role === 'marketing') {
            return NextResponse.json({ message: 'Forbidden: Access restricted' }, { status: 403 });
        }

        await connectDB();
        
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '50');
        const skip = (page - 1) * limit;

        const bids = await Bid.find({})
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const totalEntries = await Bid.countDocuments({});

        return NextResponse.json({
            data: bids,
            pagination: {
                total: totalEntries,
                page,
                limit,
                totalPages: Math.ceil(totalEntries / limit)
            }
        });
    } catch (error: any) {
        console.error('Fetch admin bids error:', error);
        return NextResponse.json({ 
            message: 'Failed to fetch bids', 
            error: process.env.NODE_ENV === 'development' ? error.message : undefined 
        }, { status: 500 });
    }
}
