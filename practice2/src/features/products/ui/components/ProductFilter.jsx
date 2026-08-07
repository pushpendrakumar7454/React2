import React from "react";
import { allProductsCategor } from "../../hooks/useProductHook";

const ProductFilter = ({search,setSearch,category,setCategory}) => {

    const {data,isPending,error}=allProductsCategor()
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">

      {/* Left Side - Search */}
      <div className="w-full">
        <input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
          type="text"
          placeholder=" Search Product..."
          className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Right Side - Category */}
      <div className="w-full md:w-64">
        <select value={category} onChange={(e)=>setCategory(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500">
          <option>All Categories</option>
         {data?.map((item)=>{
            return <option key={item.slug} value={item.slug}>{item.name}</option>
         })}
        </select>
      </div>

    </div>
  );
};

export default ProductFilter;