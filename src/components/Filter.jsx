import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilters, setFilters } from '../redux/productsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.data.filters);
  const [categories, setCategories] = useState(filters.categories);
  const [priceRange, setPriceRange] = useState(filters.priceRange);
  const [rating, setRating] = useState(filters.rating);

  useEffect(() => {
    setCategories(filters.categories);
    setPriceRange(filters.priceRange);
    setRating(filters.rating);
  }, [filters]);

  const handleApplyFilters = () => {
    dispatch(setFilters({ categories, priceRange, rating }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setCategories([]);
    setPriceRange([0, 1000]);
    setRating(0);
  };

  return (
    <div className="mb-4">
      <div>
        <h4 className="font-bold mb-2">Categories</h4>
        <div className='grid gap-4'>
          {['men\'s clothing', 'women\'s clothing', 'electronics', 'jewelery'].map(category => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                checked={categories.includes(category)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCategories([...categories, category]);
                  } else {
                    setCategories(categories.filter(cat => cat !== category));
                  }
                }}
              />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-bold mb-2">Price Range</h4>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        />
        <div>
          <span>${priceRange[0]}</span> - <span>${priceRange[1]}</span>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-bold mb-2">Rating</h4>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <div>{rating} stars & up</div>
      </div>

      <div className="mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleApplyFilters}>
          Apply Filters
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded ml-2" onClick={handleClearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
