import { configureStore } from '@reduxjs/toolkit';
import ducksReducer from './ducksSlice';

export default configureStore({
  reducer: {
    pixels: ducksReducer,
  },
});
