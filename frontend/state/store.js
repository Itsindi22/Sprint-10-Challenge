import { configureStore } from '@reduxjs/toolkit';
import { orderApi } from './orderApi';
import formSlice from '../state/formState'; // Adjust if it's a named export


export const resetStore = () => configureStore({
  reducer: {
form: formSlice,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(orderApi.middleware),
});

export const store = resetStore();
