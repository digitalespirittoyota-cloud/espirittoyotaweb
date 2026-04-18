import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBid extends Document {
    name: string;
    phone: string;
    email?: string;
    city: string;
    carId: mongoose.Types.ObjectId;
    carModel: string;
    bidPrice: number;
    purchaseTimeline: string;
    purchaseMode: string;
    message?: string;
    uniqueId: string;
    ip?: string;
    status: 'new' | 'contacted' | 'approved' | 'rejected' | 'closed';
    createdAt: Date;
    updatedAt: Date;
}

const BidSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String },
        city: { type: String, required: true },
        carId: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
        carModel: { type: String, required: true },
        bidPrice: { type: Number, required: true },
        purchaseTimeline: { type: String, default: 'Immediately' },
        purchaseMode: { type: String, default: 'Full Payment' },
        message: { type: String },
        uniqueId: { type: String, required: true, unique: true },
        ip: { type: String },
        status: { 
            type: String, 
            enum: ['new', 'contacted', 'approved', 'rejected', 'closed'], 
            default: 'new' 
        }
    },
    { timestamps: true }
);

const Bid: Model<IBid> = mongoose.models.Bid || mongoose.model<IBid>('Bid', BidSchema);

export default Bid;
