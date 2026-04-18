import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICar extends Document {
    modelId: mongoose.Types.ObjectId;
    variantName: string;
    mileage: string;
    ownerType: 'First' | 'Second' | 'Third';
    manufactureYear: string;
    color: string;
    minPrice: number;
    regDate: string;
    status: 'available' | 'sold';
    images?: string[]; // Array of Firebase Storage image URLs
}

const CarSchema: Schema = new Schema({
    modelId: { type: Schema.Types.ObjectId, ref: 'CarModel', required: true },
    variantName: { type: String, required: true },
    mileage: { type: String },
    ownerType: { type: String, enum: ['First', 'Second', 'Third'], default: 'First' },
    manufactureYear: { type: String },
    color: { type: String },
    minPrice: { type: Number },
    regDate: { type: String },
    status: { type: String, enum: ['available', 'sold'], default: 'available' },
    images: { type: [String], default: [] }
}, { timestamps: true });

const Car: Model<ICar> = mongoose.models.Car || mongoose.model<ICar>('Car', CarSchema);
if (mongoose.models.Car && mongoose.models.Car.schema) {
    // This helps in development to ensure schema changes are reflected
    // though usually you'd want to restart the dev server.
}
export default Car;
