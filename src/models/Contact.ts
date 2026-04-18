import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    status: 'new' | 'contacted' | 'closed';
    uniqueId: string;
    ip: string;
    createdAt: Date;
}

const ContactSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        subject: { type: String },
        message: { type: String, required: true },
        status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
        uniqueId: { type: String, required: true, unique: true },
        ip: { type: String }
    },
    { timestamps: true }
);

const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
