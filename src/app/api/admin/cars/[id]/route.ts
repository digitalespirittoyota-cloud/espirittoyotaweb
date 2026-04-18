import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Car from '@/models/Car';
import { CarSchema } from '@/app/lib/schemas';
import { getServerSession } from '@/app/lib/auth';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const { id } = await params;
        const car = await Car.findById(id).populate('modelId');
        if (!car) return NextResponse.json({ message: 'Car not found' }, { status: 404 });
        return NextResponse.json(car);
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch car' }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const session = await getServerSession();
        if (!session || (session.role !== 'admin' && session.role !== 'bidding')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        await connectDB();
        const { id } = await params;
        const json = await req.json();
        
        // Validate with Zod
        const validation = CarSchema.safeParse(json);
        if (!validation.success) {
            return NextResponse.json({ 
                message: 'Validation failed', 
                errors: validation.error.format() 
            }, { status: 400 });
        }

        const updated = await Car.findByIdAndUpdate(id, validation.data, { new: true });
        if (!updated) return NextResponse.json({ message: 'Car not found' }, { status: 404 });
        
        return NextResponse.json(updated);
    } catch (error: any) {
        console.error('Update car error:', error);
        return NextResponse.json({ 
            message: 'Failed to update car', 
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const session = await getServerSession();
        if (!session || (session.role !== 'admin' && session.role !== 'bidding')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        await connectDB();
        const { id } = await params;
        await Car.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Car deleted successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to delete car' }, { status: 500 });
    }
}

