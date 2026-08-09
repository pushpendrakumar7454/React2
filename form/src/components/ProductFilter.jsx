
import React from "react";
import { getCategory } from "../hooks/productapi";

const ProductFilter = ({ category, setCategory}) => {
  const { data, isPending, error } = getCategory();

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full mb-6">
      {/* Search */}
      <div className="w-full">
        <input
          type="text"
          placeholder="Search Product..."
          className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Category */}
      <div className="w-full md:w-64">
        <select value={category} onChange={(e)=>setCategory(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="">All Categories</option>

          {data?.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
