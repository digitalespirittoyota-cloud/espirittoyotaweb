import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Car from '@/models/Car';
import Bid from '@/models/Bid';
import { CarSchema } from '@/app/lib/schemas';
import { getServerSession } from '@/app/lib/auth';

export async function GET(req: Request) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        // Only Admin and Bidding can manage inventory
        if (session.role === 'marketing') {
            return NextResponse.json({ message: 'Forbidden: Access restricted' }, { status: 403 });
        }

        await connectDB();
        const { searchParams } = new URL(req.url);
        
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '50');
        const skip = (page - 1) * limit;

        const filter: any = {};
        if (searchParams.get('modelId')) filter.modelId = searchParams.get('modelId');
        if (searchParams.get('ownerType')) filter.ownerType = searchParams.get('ownerType');
        
        const cars = await Car.find(filter)
            .populate('modelId')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const carsWithBids = await Promise.all(
            cars.map(async (car) => {
                const bids = await Bid.find({ carId: car._id });
                return { ...car.toObject(), bids };
            })
        );

        const totalEntries = await Car.countDocuments(filter);

        return NextResponse.json({
            data: carsWithBids,
            pagination: {
                total: totalEntries,
                page,
                limit,
                totalPages: Math.ceil(totalEntries / limit)
            }
        });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch cars' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await getServerSession();
        if (!session || (session.role !== 'admin' && session.role !== 'bidding')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

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
