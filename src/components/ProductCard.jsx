import { Card } from 'flowbite-react'
import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <Card
            className="w-full transition-all delay-75 hover:scale-105 ease-in-out"
        >
            <img src={product?.image} className='h-[250px]' alt={product?.title} />
            <Link to="/">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product?.title}
                </h5>
                <h6 className="text-[16px] font-semibold pt-2 tracking-tight text-gray-900 dark:text-white">
                    {product?.category}
                </h6>
            </Link>
                <Rating
                    initialRating={product?.rating?.rate}
                    emptySymbol={<AiOutlineStar className="icon" />}
                    fullSymbol={<FaStar className="icon text-orange-500" />}
                    readonly
                />
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${product?.price}</span>
                <Link
                    to="/"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Add to cart
                </Link>
            </div>
        </Card>
    )
}

export default ProductCard
