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
  loading: boolean;
  error: string | null;
}

const initialState: CustomerState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCustomers = createAsyncThunk('customers/fetchAll', async () => {
  const response = await fetch('/api/admin/enquiries');
  if (!response.ok) {
    throw new Error('Failed to fetch enquiries');
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
      })
      .addCase(fetchCustomers.fulfilled, (state, action: PayloadAction<CustomerEnquiry[]>) => {
        state.loading = false;
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default customerSlice.reducer;
