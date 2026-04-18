import { z } from 'zod';
import { OWNER_TYPES, CAR_STATUSES, MAX_IMAGES } from './constants';

export const CarSchema = z.object({
    modelId: z.string().min(1, 'Please select a model'),
    variantName: z.string().min(1, 'Please select a variant'),
    mileage: z.string().optional(),
    ownerType: z.enum(OWNER_TYPES),
    manufactureYear: z.string().optional(),
    color: z.string().optional(),
    minPrice: z.number().optional(),
    regDate: z.string().optional(),
    status: z.enum(CAR_STATUSES).default('available'),
    images: z.array(z.string()).max(MAX_IMAGES, `Maximum ${MAX_IMAGES} images allowed`).default([]),
});

export type CarInput = z.infer<typeof CarSchema>;

export const LoginSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginInput = z.infer<typeof LoginSchema>;
