import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBooking extends Document {
    name: string;
    email: string;
    phone: string;
    carModel: string;
    serviceType: string;
    date: string;
    registrationNumber?: string;
    message?: string;
    uniqueId: string;
    ip: string;
    formType: string;
    status: 'new' | 'contacted' | 'closed';
    createdAt: Date;
    updatedAt: Date;
}

const BookingSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        carModel: { type: String, required: true },
        serviceType: { type: String, required: true },
        date: { type: String, required: true },
        registrationNumber: { type: String },
        message: { type: String },
        uniqueId: { type: String, required: true, unique: true },
        ip: { type: String },
        formType: { type: String, default: 'Service Booking' },
        status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' }
    },
    { timestamps: true }
);

const Booking: Model<IBooking> = mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
