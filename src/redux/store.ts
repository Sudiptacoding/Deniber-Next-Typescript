import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { authApi } from './slices/authApi';

const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),  // Add the RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;