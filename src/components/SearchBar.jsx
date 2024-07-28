import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/productsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search for products..."
      className="border p-2 w-full mb-4"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
