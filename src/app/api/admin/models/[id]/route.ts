import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import CarModel from '@/models/CarModel';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const { id } = await params;
        const model = await CarModel.findById(id);
        if (!model) return NextResponse.json({ message: 'Model not found' }, { status: 404 });
        return NextResponse.json(model);
    } catch (error) {
        console.error('FETCH MODELS ERROR:', error);
        return NextResponse.json({ message: 'Failed to fetch model' }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const { id } = await params;
        const data = await req.json();
        const updated = await CarModel.findByIdAndUpdate(id, data, { new: true });
        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ message: 'Failed to update model' }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const { id } = await params;
        await CarModel.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Model deleted successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to delete model' }, { status: 500 });
    }
}
