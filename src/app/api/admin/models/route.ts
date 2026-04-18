import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import CarModel from '@/models/CarModel';

export async function GET() {
    try {
        await connectDB();
        const models = await CarModel.find({});
        return NextResponse.json(models);
    } catch (error) {
        console.error('FETCH MODELS ERROR:', error);
        return NextResponse.json({ message: 'Failed to fetch models' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const data = await req.json();
        console.log('ADDING MODEL DATA:', data);
        const newModel = await CarModel.create(data);
        console.log('✅ MODEL CREATED:', newModel._id);
        return NextResponse.json(newModel, { status: 201 });
    } catch (error) {
        console.error('CREATE MODEL ERROR:', error);
        return NextResponse.json({ message: 'Failed to create model' }, { status: 500 });
    }
}
