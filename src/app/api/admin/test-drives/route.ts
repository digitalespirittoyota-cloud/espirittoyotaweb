import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import TestDrive from '@/models/TestDrive';
import { getServerSession } from '@/app/lib/auth';

export async function GET(req: Request) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        if (session.role === 'bidding') {
            return NextResponse.json({ message: 'Forbidden: Access restricted' }, { status: 403 });
        }

        await connectDB();

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '50');
        const skip = (page - 1) * limit;

        const testDrives = await TestDrive.find({})
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const totalEntries = await TestDrive.countDocuments({});

        return NextResponse.json({
            data: testDrives,
            pagination: {
                total: totalEntries,
                page,
                limit,
                totalPages: Math.ceil(totalEntries / limit)
            }
        });
    } catch (error: any) {
        console.error('Fetch test drives error:', error);
        return NextResponse.json({ message: 'Failed to fetch test drives' }, { status: 500 });
    }
}
