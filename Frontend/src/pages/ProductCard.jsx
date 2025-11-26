import React from 'react'
import { Link } from "react-router-dom"

const ProductCard = ({ product, AddCartHandler }) => {
  return (
    <div className=' shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
       <img
      src={product.image}
      alt={product.title}
      className="w-full h-48 object-contain p-4"
    />


    <div className="p-2">
      <h1 className="font-bold text-sm">{product.title}</h1>
      <p className="text-gray-600 mb-4 text-sm">
        {product.description?.slice(0, 100)}...
      </p>

      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-green-900">
          ₹{product.price || "N/A"}
        </span>
        <button
          onClick={() => AddCartHandler(product)}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition "
        >
          Add to Cart
        </button>
      </div>
      <Link
        to={`/admin/product/${product.id}`}
        className="text-sm text-blue-600 hover:underline"
      >
        More Info
      </Link>
    </div>
    </div>
  )
}

export default ProductCard

