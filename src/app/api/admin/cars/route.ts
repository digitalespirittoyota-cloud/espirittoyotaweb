import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Car from '@/models/Car';
import { CarSchema } from '@/app/lib/schemas';

export async function GET(req: Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const filter: any = {};
        
        if (searchParams.get('modelId')) filter.modelId = searchParams.get('modelId');
        if (searchParams.get('ownerType')) filter.ownerType = searchParams.get('ownerType');
        
        const cars = await Car.find(filter).populate('modelId');
        return NextResponse.json(cars);
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch cars' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const json = await req.json();
        
        // Validate with Zod
        const validation = CarSchema.safeParse(json);
        if (!validation.success) {
            return NextResponse.json({ 
                message: 'Validation failed', 
                errors: validation.error.format() 
            }, { status: 400 });
        }

        const newCar = await Car.create(validation.data);
        return NextResponse.json(newCar, { status: 201 });
    } catch (error: any) {
        console.error('Create car error:', error);
        return NextResponse.json({ 
            message: 'Failed to create car', 
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        }, { status: 500 });
    }
}
