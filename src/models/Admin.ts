import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAdmin extends Document {
    username: string;
    passwordHash: string;
    role: 'admin' | 'bidding' | 'marketing';
}

const AdminSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['admin', 'bidding', 'marketing'], default: 'admin' }
}, { timestamps: true });

const Admin: Model<IAdmin> = mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema);
export default Admin;
