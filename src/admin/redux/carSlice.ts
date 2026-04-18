import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Car {
  _id: string;
  modelId: any; // Can be popluated or ID
  variantName: string;
  mileage?: string;
  ownerType: string;
  manufactureYear?: string;
  color?: string;
  minPrice?: number;
  regDate?: string;
  status: string;
  images: string[];
}

interface CarState {
  items: Car[];
  loading: boolean;
  error: string | null;
}

const initialState: CarState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCars = createAsyncThunk('cars/fetchAll', async () => {
  const response = await fetch('/api/admin/cars');
  if (!response.ok) {
    throw new Error('Failed to fetch cars');
  }
  return response.json();
});

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action: PayloadAction<Car[]>) => {
        state.loading = false;
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default carSlice.reducer;
