import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (filters) => {
    const queryString = new URLSearchParams(filters).toString();
    const response = await axios.get(`http://localhost:3000/api/v1/products/filters?${queryString}`);
    return response.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
        filters: {
            categories: '',
            minPrice: '',
            maxPrice: '',
            minRating: '',
            sortBy: '',
            searchQuery: '',
        },
    },
    reducers: {
        updateFilters(state, action) {
            state.filters = { ...state.filters, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { updateFilters } = productsSlice.actions;
export default productsSlice.reducer;
