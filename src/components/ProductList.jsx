import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductList = () => {
  const filteredProducts = useSelector(state => state.data.filteredProducts);
  return (
    <section>
    {filteredProducts.length === 0 ? ( <div className="my-12 grid place-items-center px-2 md:my-24 md:px-0">
      <div className="lg:flex lg:items-center lg:space-x-10">
          <img
              src="https://res.cloudinary.com/freestyle07/image/upload/v1718628757/collecting-concept-illustration_elzdbi.png"
              alt="question-mark"
              className="h-[300px] w-auto"
          />
      </div>
      <div className="mt-6 capitalize text-lg font-semibold">
          NOT PRODUCTS FOUND
      </div>
  </div>) : (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 sm:p-10">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>)}
    </section>
  );
};

export default ProductList;
