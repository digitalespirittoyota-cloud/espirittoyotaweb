export const OWNER_TYPES = ['First', 'Second', 'Third'] as const;
export type OwnerType = (typeof OWNER_TYPES)[number];

export const CAR_STATUSES = ['available', 'sold'] as const;
export type CarStatus = (typeof CAR_STATUSES)[number];

export const MAX_IMAGES = 5;
export const MAX_IMAGE_SIZE_KB = 200;

export const YEARS = Array.from({ length: 25 }, (_, i) => {
    const year = new Date().getFullYear() - i + 1; // Includes next year just in case
    return String(year);
});
