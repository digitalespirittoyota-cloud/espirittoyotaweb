import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import CarModel from '@/models/CarModel';
import { getServerSession } from '@/app/lib/auth';

export async function GET(req: Request) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        if (session.role === 'marketing') {
            return NextResponse.json({ message: 'Forbidden: Access restricted' }, { status: 403 });
        }

        await connectDB();
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '50');
        const skip = (page - 1) * limit;

        const models = await CarModel.find({})
            .sort({ name: 1 })
            .skip(skip)
            .limit(limit);

        const totalEntries = await CarModel.countDocuments({});

        return NextResponse.json({
            data: models,
            pagination: {
                total: totalEntries,
                page,
                limit,
                totalPages: Math.ceil(totalEntries / limit)
            }
        });
    } catch (error) {
        console.error('FETCH MODELS ERROR:', error);
        return NextResponse.json({ message: 'Failed to fetch models' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await getServerSession();
        if (!session || (session.role !== 'admin' && session.role !== 'bidding')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        await connectDB();
        const data = await req.json();
        const newModel = await CarModel.create(data);
        return NextResponse.json(newModel, { status: 201 });
    } catch (error: any) {
        console.error('CREATE MODEL ERROR:', error);
        
        // Handle MongoDB duplicate key error
        if (error.code === 11000) {
            return NextResponse.json({ 
                message: 'A model with this name already exists. Please use a unique name.' 
            }, { status: 400 });
        }

        return NextResponse.json({ 
            message: 'Failed to create model',
            error: error.message
        }, { status: 500 });
    }
}
