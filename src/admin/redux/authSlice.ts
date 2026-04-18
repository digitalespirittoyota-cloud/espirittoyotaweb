import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  username: string;
  role: 'admin' | 'bidding' | 'marketing';
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

const getInitialUser = () => {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem('admin_user');
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch (e) {
    return null;
  }
};

const initialState: AuthState = {
  user: getInitialUser(),
  loading: false,
  error: null,
  initialized: typeof window !== 'undefined' && !!localStorage.getItem('admin_user'),
};

export const fetchMe = createAsyncThunk('auth/fetchMe', async () => {
  const response = await fetch('/api/admin/auth/me');
  if (!response.ok) {
    throw new Error('Unauthorized');
  }
  const data = await response.json();
  return data.user;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.initialized = true;
    },
    logout: (state) => {
      state.user = null;
      state.initialized = true;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMe.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMe.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.initialized = true;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to authenticate';
        state.user = null;
        state.initialized = true;
      });
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
