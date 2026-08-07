import React from "react";

const ProductCart = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Product Image */}
      <div className="h-56 bg-gray-100 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Information */}
      <div className="p-5">
        
        {/* Category */}
        <p className="text-sm text-gray-500 capitalize mb-1">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-500">
            ⭐ {product.rating}
          </span>

          <span className="text-sm text-gray-400">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>

        {/* Price & Discount */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-2xl font-bold text-gray-800">
              ${product.price}
            </span>

            <p className="text-sm text-green-600">
              {product.discountPercentage}% OFF
            </p>
          </div>

          {/* Stock */}
          <span
            className={`text-sm font-medium ${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Button */}
        <button className="w-full mt-4 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCart;