import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Admin from '@/models/Admin';
import { getServerSession } from '@/app/lib/auth';

export async function GET(req: Request) {
    try {
        const session = await getServerSession();

        if (!session) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }
        
        await connectDB();
        const admin = await Admin.findById(session.id).select('-passwordHash');
        
        if (!admin) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({
            user: {
                id: admin._id,
                username: admin.username,
                role: admin.role
            }
        });
    } catch (error) {
        console.error('Auth check error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
