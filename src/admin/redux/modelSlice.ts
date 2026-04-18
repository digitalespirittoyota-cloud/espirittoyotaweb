import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Variant {
  variantName: string;
}

interface Model {
  _id: string;
  modelName: string;
  variants: Variant[];
}

interface ModelState {
  items: Model[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  loading: boolean;
  error: string | null;
}

const initialState: ModelState = {
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

export const fetchModels = createAsyncThunk('models/fetchAll', async (params: { page?: number; limit?: number } = {}) => {
  const { page = 1, limit = 50 } = params;
  const response = await fetch(`/api/admin/models?page=${page}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch models');
  }
  return response.json();
});

const modelSlice = createSlice({
  name: 'models',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchModels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchModels.fulfilled, (state, action: PayloadAction<{ data: Model[]; pagination: any }>) => {
        state.loading = false;
        state.items = action.payload.data || [];
        state.pagination = action.payload.pagination || initialState.pagination;
      })
      .addCase(fetchModels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default modelSlice.reducer;
