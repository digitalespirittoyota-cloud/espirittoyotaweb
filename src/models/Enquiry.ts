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
    carModel?: string;
    city?: string;
    carId?: string; // Link to specific Car document
    // Bidding Specific Fields
    bidPrice?: number;
    purchaseTimeline?: string; // e.g., 'Immediately', 'Within 15 days', etc.
    purchaseMode?: string; // e.g., 'Full Payment', 'Loan / Finance'
}

const EnquirySchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String },
        message: { type: String },
        formType: { type: String, required: true }, // 'Inquiry' or 'Bidding'
        uniqueId: { type: String, required: true, unique: true },
        ip: { type: String },
        source: { type: String, default: 'website' },
        status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
        carModel: { type: String },
        city: { type: String },
        carId: { type: Schema.Types.ObjectId, ref: 'Car' },
        // Bidding
        bidPrice: { type: Number },
        purchaseTimeline: { type: String },
        purchaseMode: { type: String }
    },
    { timestamps: true }
);

const Enquiry: Model<IEnquiry> = mongoose.models.Enquiry || mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
if (mongoose.models.Enquiry && mongoose.models.Enquiry.schema) {
    // Force refresh the schema in dev
}
export default Enquiry;
