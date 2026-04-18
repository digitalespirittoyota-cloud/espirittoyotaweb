import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface CustomerEnquiry {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  message?: string;
  formType: string;
  uniqueId: string;
  status: 'new' | 'contacted' | 'closed';
  createdAt: string;
  carModel?: string;
}

interface CustomerState {
  items: CustomerEnquiry[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  loading: boolean;
  error: string | null;
}

const initialState: CustomerState = {
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

export const fetchCustomers = createAsyncThunk('customers/fetchAll', async (params: { page?: number; limit?: number } = {}) => {
  const { page = 1, limit = 50 } = params;
  const response = await fetch(`/api/admin/customers?page=${page}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch customers');
  }
  return response.json();
});

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustomers.fulfilled, (state, action: PayloadAction<{ data: CustomerEnquiry[]; pagination: any }>) => {
        state.loading = false;
        state.items = action.payload.data || [];
        state.pagination = action.payload.pagination || initialState.pagination;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default customerSlice.reducer;
