import React from 'react'
import SearchBar from '../components/SearchBar'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'
import Filter from '../components/Filter'

const Home = () => {
  return (
    <main className='px-5 sm:px-10 mt-5'>
         <h1 className="text-4xl font-bold mb-5 text-center">Product Catalog</h1>
         <SearchBar />
         <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full md:w-1/4">
            <Filter />
          </div>
          <div className="w-full md:w-3/4">
            <Sort />
            <ProductList />
          </div>
        </div>
    </main>
  )
}

export default Home