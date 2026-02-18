import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBooking extends Document {
    name: string;
    phone: string;
    email: string;
    message?: string;
    formType: string;
    uniqueId: string;
    ip: string;
    source: string;
    status: 'new' | 'confirmed' | 'completed' | 'cancelled';
    createdAt: Date;
    carModel: string;
    registrationNumber?: string;
    serviceType: string;
    date: string;
}

const BookingSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        message: { type: String },
        formType: { type: String, default: 'Service Booking' },
        uniqueId: { type: String, required: true, unique: true },
        ip: { type: String },
        source: { type: String, default: 'website' },
        status: { type: String, enum: ['new', 'confirmed', 'completed', 'cancelled'], default: 'new' },
        carModel: { type: String, required: true },
        registrationNumber: { type: String },
        serviceType: { type: String, required: true },
        date: { type: String, required: true },
    },
    { timestamps: true }
);

const Booking: Model<IBooking> = mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
