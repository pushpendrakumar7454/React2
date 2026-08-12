import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

      {/* Product Image */}
      <div className="h-64 bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="text-xs uppercase font-semibold text-indigo-600 mb-2">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[56px]">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2 mt-2 min-h-[40px]">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center gap-1">
            <Star
              size={17}
              className="text-yellow-400"
              fill="currentColor"
            />

            <span className="font-semibold text-gray-700">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
        </div>

        {/* Add To Cart */}
        <button className="w-full mt-4 bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all duration-300">
          <ShoppingCart size={19} />
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;