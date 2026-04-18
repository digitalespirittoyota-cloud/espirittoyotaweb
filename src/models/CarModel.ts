import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IVariant {
    variantName: string;
    fuelType: string;
    transmission: string;
    engine: string;
    seatingCapacity: string;
}

export interface ICarModel extends Document {
    modelName: string;
    brand: string;
    variants: IVariant[];
}

const VariantSchema = new Schema({
    variantName: { type: String, required: true },
    fuelType: { type: String },
    transmission: { type: String },
    engine: { type: String },
    seatingCapacity: { type: String }
});

const CarModelSchema: Schema = new Schema({
    modelName: { type: String, required: true, unique: true },
    brand: { type: String, default: 'Toyota' },
    variants: [VariantSchema]
}, { timestamps: true });

const CarModel: Model<ICarModel> = mongoose.models.CarModel || mongoose.model<ICarModel>('CarModel', CarModelSchema);
export default CarModel;
