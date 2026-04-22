import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Bid from '@/models/Bid';
import { getServerSession } from '@/app/lib/auth';

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const session = await getServerSession();
        if (!session || (session.role !== 'admin' && session.role !== 'bidding')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        await connectDB();
        const { id } = await params;
        const { status } = await req.json();

        // Validate status
        const validStatuses = ['new', 'contacted', 'approved', 'rejected', 'closed'];
        if (!validStatuses.includes(status)) {
            return NextResponse.json({ message: 'Invalid status' }, { status: 400 });
        }

        const updateData: any = { status };
        if (status === 'approved') {
            updateData.agreedToTerms = true;
        } else {
            updateData.agreedToTerms = false;
        }

        const updatedBid = await Bid.findByIdAndUpdate(id, updateData, { new: true });
        
        if (!updatedBid) {
            return NextResponse.json({ message: 'Bid not found' }, { status: 404 });
        }

        return NextResponse.json(updatedBid);
    } catch (error: any) {
        console.error('Update bid error:', error);
        return NextResponse.json({ 
            message: 'Failed to update bid status', 
            error: process.env.NODE_ENV === 'development' ? error.message : undefined 
        }, { status: 500 });
    }
}
