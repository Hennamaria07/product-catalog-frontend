import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'
import Rating from 'react-rating'

const ProductCard = ({ product }) => {
    return (
        <Card
            className="w-full"
            imgAlt={product?.title}
            imgSrc={product?.image}
        >
            <Link to="/">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product?.title}
                </h5>
            </Link>
            <div className="mb-5 mt-2.5 flex items-center">
                <Rating
                    initialRating={field.value}
                    emptySymbol={<AiOutlineStar className="icon" />}
                    fullSymbol={<FaStar className="icon text-orange-500" />}
                    onChange={field.onChange}
                />
            </div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${product?.price}</span>
                <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Add to cart
                </a>
            </div>
        </Card>
    )
}

export default ProductCard
