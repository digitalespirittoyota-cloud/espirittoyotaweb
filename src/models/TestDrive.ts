import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITestDrive extends Document {
    name: string;
    phone: string;
    email: string;
    city: string;
    carModel: string;
    date: string;
    time: string;
    status: 'new' | 'contacted' | 'closed';
    uniqueId: string;
    ip: string;
    createdAt: Date;
}

const TestDriveSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        city: { type: String, required: true },
        carModel: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true },
        status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
        uniqueId: { type: String, required: true, unique: true },
        ip: { type: String }
    },
    { timestamps: true }
);

const TestDrive: Model<ITestDrive> = mongoose.models.TestDrive || mongoose.model<ITestDrive>('TestDrive', TestDriveSchema);

export default TestDrive;
