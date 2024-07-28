import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortCriteria } from '../redux/productsSlice';

const Sort = () => {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    dispatch(setSortCriteria(e.target.value));
  };

  return (
    <select className="border p-2 mb-4" onChange={handleSortChange}>
      <option value="">Sort by</option>
      <option value="priceLowToHigh">Price: Low to High</option>
      <option value="priceHighToLow">Price: High to Low</option>
      <option value="rating">Rating</option>
    </select>
  );
};

export default Sort;
