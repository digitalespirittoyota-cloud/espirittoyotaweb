import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IEnquiry extends Document {
    name: string;
    phone: string;
    email: string;
    message?: string;
    formType: string;
    uniqueId: string;
    ip: string;
    source: string;
    status: 'new' | 'contacted' | 'closed';
    createdAt: Date;
    // Use carModel instead of model to avoid collision with Mongoose.Document.model()
    carModel?: string;
    subject?: string;
    date?: string;
    time?: string;
    city?: string;
}

const EnquirySchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        message: { type: String },
        formType: { type: String, required: true },
        uniqueId: { type: String, required: true, unique: true },
        ip: { type: String },
        source: { type: String, default: 'website' },
        status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
        carModel: { type: String },
        subject: { type: String },
        date: { type: String },
        time: { type: String },
        city: { type: String },
    },
    { timestamps: true }
);

const Enquiry: Model<IEnquiry> = mongoose.models.Enquiry || mongoose.model<IEnquiry>('Enquiry', EnquirySchema);

export default Enquiry;
