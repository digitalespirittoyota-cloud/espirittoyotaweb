'use client';

import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CarSchema, type CarInput } from '@/app/lib/schemas';
import { useSelector } from 'react-redux';
import { Upload, X, Camera, Image as ImageIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { uploadImage } from '@/app/lib/uploadService';
import { OWNER_TYPES, CAR_STATUSES, YEARS, MAX_IMAGES, MAX_IMAGE_SIZE_KB } from '@/app/lib/constants';

interface Variant {
  variantName: string;
}

interface CarModel {
  _id: string;
  modelName: string;
  variants: Variant[];
}

interface CarFormProps {
  initialData?: any;
  onSubmit: SubmitHandler<CarInput>;
  onCancel: () => void;
}

export default function CarForm({ initialData, onSubmit, onCancel }: CarFormProps) {
  const { items: models } = useSelector((state: any) => state.models as { items: CarModel[] });
  const [variants, setVariants] = useState<Variant[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<z.input<typeof CarSchema>>({
    resolver: zodResolver(CarSchema) as any,
    defaultValues: initialData ? {
      ...initialData,
      modelId: initialData.modelId?._id || initialData.modelId,
      regDate: initialData.regDate ? new Date(initialData.regDate).toISOString().split('T')[0] : '',
      images: initialData?.images || [],
      ownerType: initialData?.ownerType || 'First',
      status: initialData?.status || 'available',
      manufactureYear: initialData?.manufactureYear ? String(initialData.manufactureYear) : String(new Date().getFullYear()),
      minPrice: initialData?.minPrice ? Number(initialData.minPrice) : 0
    } : {
      modelId: '',
      variantName: '',
      mileage: '',
      ownerType: 'First',
      status: 'available',
      manufactureYear: String(new Date().getFullYear()),
      color: '',
      minPrice: 0,
      regDate: '',
      images: [] as string[]
    }
  });

  const [gallery, setGallery] = useState<string[]>(initialData?.images || []);

  useEffect(() => {
    if (initialData) {
      setGallery(initialData?.images || []);
      setValue('images', initialData?.images || []);
    }
  }, [initialData, setValue]);

  const selectedModelId = watch('modelId');

  useEffect(() => {
    if (selectedModelId) {
      const model = models.find((m: CarModel) => m._id === selectedModelId);
      setVariants(model?.variants || []);

      // Clear variant if it's not in the new model's variants
      const currentVariant = watch('variantName');
      const variantExists = model?.variants?.some((v: Variant) => v.variantName === currentVariant);
      if (!variantExists) {
        setValue('variantName', '');
      }
    } else {
      setVariants([]);
      setValue('variantName', '');
    }
  }, [selectedModelId, models, setValue, watch]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (gallery.length + files.length > MAX_IMAGES) {
      toast.error(`Maximum ${MAX_IMAGES} images allowed`);
      return;
    }

    setIsUploading(true);
    const uploadToast = toast.loading('Uploading images...');

    try {
      const uploadPromises = files.map(async (file) => {
        if (file.size > MAX_IMAGE_SIZE_KB * 1024) {
          throw new Error(`${file.name} is too large. Max ${MAX_IMAGE_SIZE_KB}KB per image.`);
        }

        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = async () => {
            try {
              const base64 = reader.result as string;
              const url = await uploadImage(base64);
              resolve(url);
            } catch (err) {
              reject(err);
            }
          };
          reader.onerror = () => reject(new Error('File reading failed'));
          reader.readAsDataURL(file);
        });
      });

      const newUrls = await Promise.all(uploadPromises);
      const updatedGallery = [...gallery, ...newUrls];
      setGallery(updatedGallery);
      setValue('images', updatedGallery);
      toast.success('Images uploaded successfully', { id: uploadToast });
    } catch (error: any) {
      toast.error(error.message || 'Failed to upload images', { id: uploadToast });
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = (index: number) => {
    setGallery(prev => {
      const newGallery = prev.filter((_, i) => i !== index);
      setValue('images', newGallery);
      return newGallery;
    });
  };

  const onValid: SubmitHandler<z.input<typeof CarSchema>> = async (data) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data as CarInput);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onValid)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Model Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Model</label>
          <select
            {...register('modelId', { required: 'Please select a model' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm border p-2 bg-white"
          >
            <option value="">Choose a model</option>
            {models.map((m: CarModel) => (
              <option key={m._id} value={m._id}>{m.modelName}</option>
            ))}
          </select>
          {errors.modelId && <p className="text-red-500 text-xs mt-1">{errors.modelId.message as string}</p>}
        </div>

        {/* Variant Selection (Dependent) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Variant</label>
          <select
            {...register('variantName', { required: 'Please select a variant' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm border p-2 bg-white"
            disabled={!selectedModelId}
          >
            <option value="">Choose a variant</option>
            {variants.map((v: Variant, i: number) => (
              <option key={i} value={v.variantName}>{v.variantName}</option>
            ))}
          </select>
          {errors.variantName && <p className="text-red-500 text-xs mt-1">{errors.variantName.message as string}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Color</label>
          <input
            {...register('color')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm border p-2"
            placeholder="e.g. Platinum White"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mileage (e.g. km/l or range)</label>
          <input
            {...register('mileage')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm border p-2"
            placeholder="e.g. 15.5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Manufacture Year</label>
          <select
            {...register('manufactureYear')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm border p-2"
          >
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Reg. Date
          </label>
          <input
            type="date"
            {...register('regDate')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm border p-2"
          />
        </div>



        <div>
          <label className="block text-sm font-medium text-gray-700">Owner Type</label>
          <select
            {...register('ownerType')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm border p-2 bg-white"
          >
            <option value="First">First Owner</option>
            <option value="Second">Second Owner</option>
            <option value="Third">Third Owner</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum Price (₹)</label>
          <input
            type="number"
            {...register('minPrice', { valueAsNumber: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm border p-2"
            placeholder="e.g. 2500000"
          />
          {errors.minPrice && <p className="text-red-500 text-xs mt-1">{errors.minPrice.message as string}</p>}
        </div>
      </div>

      <div className="pt-6 border-t">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center">
          <ImageIcon className="mr-2 text-red-600" size={18} /> Vehicle Gallery
        </h3>
        <div className="space-y-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {gallery.map((img, index) => (
              <div key={index} className="relative group aspect-square bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <img src={img} className="w-full h-full object-cover" alt={`Vehicle ${index + 1}`} />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                >
                  <X size={14} />
                </button>
              </div>
            ))}

            {gallery.length < MAX_IMAGES && (
              <label className={`aspect-square flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:bg-white hover:border-red-400 transition-all group ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <Camera className="text-slate-400 group-hover:text-red-500 mb-2" size={24} />
                <span className="text-[10px] font-bold text-slate-500 uppercase">{isUploading ? 'Uploading...' : 'Add Photo'}</span>
                <input type="file" multiple accept="image/*" className="hidden" onChange={handleImageUpload} disabled={isUploading} />
              </label>
            )}
          </div>
          <p className="text-[10px] text-gray-400 italic">
            * Upload up to {MAX_IMAGES} photos. Max {MAX_IMAGE_SIZE_KB}KB per file. Optimized Cloud Storage.
          </p>
        </div>
      </div>

      <div className="pt-6 border-t font-medium flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting || isUploading}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm text-white bg-red-600 hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (initialData ? 'Update Car' : 'Save Car')}
        </button>
      </div>
    </form>
  );
}
