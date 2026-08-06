import React from "react";

const ProductFilter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">

      {/* Left Side - Search */}
      <div className="w-full">
        <input
          type="text"
          placeholder=" Search Product..."
          className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Right Side - Category */}
      <div className="w-full md:w-64">
        <select className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500">
          <option>All Categories</option>
          <option>Men's Clothing</option>
          <option>Women's Clothing</option>
          <option>Jewelery</option>
          <option>Electronics</option>
        </select>
      </div>

    </div>
  );
};

export default ProductFilter;