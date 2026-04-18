'use client';

import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';

interface ModelFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export default function ModelForm({ initialData, onSubmit, onCancel }: ModelFormProps) {
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData || {
      modelName: '',
      brand: 'Toyota',
      variants: [{ variantName: '', fuelType: '', transmission: '', engine: '', seatingCapacity: '' }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants"
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Model Name</label>
          <input
            {...register('modelName', { required: 'Model name is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm border p-2"
            placeholder="e.g. Fortuner"
          />
          {errors.modelName && <p className="text-red-500 text-xs mt-1">{errors.modelName.message as string}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Brand</label>
          <input
            {...register('brand')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm border p-2"
          />
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-md font-semibold text-gray-800">Variants</h4>
          <button
            type="button"
            onClick={() => append({ variantName: '', fuelType: '', transmission: '', engine: '', seatingCapacity: '' })}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors"
          >
            <Plus size={16} className="mr-1" /> Add Variant
          </button>
        </div>

        <div className="max-h-[400px] overflow-y-auto space-y-4 pr-2">
          {fields.map((field, index) => (
            <div key={field.id} className="p-4 bg-gray-50 rounded-lg relative border border-gray-200 hover:border-red-200 transition-colors">
              <button
                type="button"
                onClick={() => remove(index)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-600"
                title="Remove Variant"
              >
                <Trash2 size={18} />
              </button>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-xs font-medium text-gray-500">Variant Name</label>
                  <input
                    {...register(`variants.${index}.variantName` as const, { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-xs border p-1.5"
                    placeholder="e.g. GR Sport"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500">Fuel Type</label>
                  <select
                    {...register(`variants.${index}.fuelType` as const)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-xs border p-1.5"
                  >
                    <option value="">Select</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500">Transmission</label>
                  <select
                    {...register(`variants.${index}.transmission` as const)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-xs border p-1.5"
                  >
                    <option value="">Select</option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
          {fields.length === 0 && (
            <p className="text-center py-4 text-gray-500 text-sm">No variants added. Click "Add Variant" to begin.</p>
          )}
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4 border-t">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
        >
          {initialData ? 'Update Model' : 'Save Model'}
        </button>
      </div>
    </form>
  );
}
