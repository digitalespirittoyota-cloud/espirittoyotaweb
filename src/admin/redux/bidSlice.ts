import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface BidLead {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  carModel?: string;
  carId?: string;
  bidPrice: number;
  purchaseTimeline: string;
  purchaseMode: string;
  uniqueId: string;
  status: 'new' | 'contacted' | 'approved' | 'rejected';
  createdAt: string;
}

interface BidState {
  items: BidLead[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  loading: boolean;
  error: string | null;
}

const initialState: BidState = {
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

export const fetchBids = createAsyncThunk('bids/fetchAll', async (params: { page?: number; limit?: number; carId?: string } = {}) => {
  const { page = 1, limit = 50, carId } = params;
  let url = `/api/admin/bidding?page=${page}&limit=${limit}`;
  if (carId) {
    url += `&carId=${carId}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch bids');
  }
  return response.json();
});

const bidSlice = createSlice({
  name: 'bids',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBids.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBids.fulfilled, (state, action: PayloadAction<{ data: BidLead[]; pagination: any }>) => {
        state.loading = false;
        state.items = action.payload.data || [];
        state.pagination = action.payload.pagination || initialState.pagination;
      })
      .addCase(fetchBids.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default bidSlice.reducer;
