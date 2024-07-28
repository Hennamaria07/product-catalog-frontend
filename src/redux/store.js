import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productsSlice';

const store = configureStore({
  reducer: {
    data: productReducer,
  },
});

export default store;
