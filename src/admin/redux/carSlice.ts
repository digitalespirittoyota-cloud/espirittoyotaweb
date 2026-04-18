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
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  loading: boolean;
  error: string | null;
}

const initialState: CarState = {
  items: [],
  pagination: {
    total: 0,
    page: 1,
    limit: 50,
    totalPages: 1
  },
  loading: false,
  error: null,
};

export const fetchCars = createAsyncThunk('cars/fetchAll', async (params: { page?: number; limit?: number } = {}) => {
  const { page = 1, limit = 50 } = params;
  const response = await fetch(`/api/admin/cars?page=${page}&limit=${limit}`);
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
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action: PayloadAction<{ data: Car[]; pagination: any }>) => {
        state.loading = false;
        state.items = action.payload.data || [];
        state.pagination = action.payload.pagination || initialState.pagination;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default carSlice.reducer;
