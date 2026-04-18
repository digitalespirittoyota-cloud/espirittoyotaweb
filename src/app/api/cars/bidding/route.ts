import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Car from '@/models/Car';
import CarModel from '@/models/CarModel';

export async function GET() {
  try {
    await connectDB();
    // Force registration of CarModel for populate
    const _modelReg = CarModel.modelName; 
    
    // Fetch all cars that have an 'available' status and populate their model info
    const biddingCars = await Car.find({ 
      status: 'available' 
    }).populate('modelId');
    
    return NextResponse.json(biddingCars);
  } catch (error) {
    console.error('Fetch bidding cars error:', error);
    return NextResponse.json({ message: 'Failed to fetch bidding cars' }, { status: 500 });
  }
}
