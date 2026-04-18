import { configureStore } from '@reduxjs/toolkit';
import modelReducer from './modelSlice';
import carReducer from './carSlice';
import customerReducer from './customerSlice';
import bidReducer from './bidSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    models: modelReducer,
    cars: carReducer,
    customers: customerReducer,
    bids: bidReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
