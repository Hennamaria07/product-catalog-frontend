import { createSlice } from '@reduxjs/toolkit';
import products from '../data';

const initialState = {
  products: products,
  filteredProducts: products,
  searchQuery: '',
  sortCriteria: 'rating',
  filters: {
    categories: [],
    priceRange: [0, 1000],
    rating: 0,
  },
};

const applyFilters = (state) => {
  let filtered = [...state.products];

  // Apply search filter
  if (state.searchQuery) {
    filtered = filtered.filter(product =>
      product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  }

  // Apply category filters
  if (state.filters.categories.length > 0) {
    filtered = filtered.filter(product =>
      state.filters.categories.includes(product.category)
    );
  }

  // Apply price range filter
  filtered = filtered.filter(product =>
    product.price >= state.filters.priceRange[0] &&
    product.price <= state.filters.priceRange[1]
  );

  // Apply rating filter
  filtered = filtered.filter(product =>
    product.rating.rate >= state.filters.rating
  );

  // Apply sorting
  if (state.sortCriteria === 'priceLowToHigh') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortCriteria === 'priceHighToLow') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortCriteria === 'rating') {
    filtered.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return filtered;
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredProducts = applyFilters(state);
    },
    setSortCriteria: (state, action) => {
      state.sortCriteria = action.payload;
      state.filteredProducts = applyFilters(state);
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
      state.filteredProducts = applyFilters(state);
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.filteredProducts = applyFilters(state);
    },
  },
});

export const { setSearchQuery, setSortCriteria, setFilters, clearFilters } = productSlice.actions;

export default productSlice.reducer;
