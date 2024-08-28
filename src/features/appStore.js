import { configureStore } from '@reduxjs/toolkit';
import userReducer from './store'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
