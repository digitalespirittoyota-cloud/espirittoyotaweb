import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Variant {
  variantName: string;
}

interface CarModel {
  _id: string;
  modelName: string;
  variants: Variant[];
}

interface ModelState {
  items: CarModel[];
  loading: boolean;
  error: string | null;
}

const initialState: ModelState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchModels = createAsyncThunk('models/fetchAll', async () => {
  const response = await fetch('/api/admin/models');
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
      })
      .addCase(fetchModels.fulfilled, (state, action: PayloadAction<CarModel[]>) => {
        state.loading = false;
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchModels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default modelSlice.reducer;
