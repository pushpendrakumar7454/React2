import React from 'react'

import { getProducts, searchbyCategory } from '../hooks/productapi';
import ProductCart from '../components/ProductCart';
import ProductFilter from '../components/ProductFilter';


const ProductPage = () => {
  

    const {data,isPending,search,setSearch}=getProducts()
   

       const {data:getData, category,setCategory}=searchbyCategory()

  if(isPending) return <h1>Loading</h1>

    return (
    <div className="p-6 bg-gray-100 min-h-screen">
   
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ProductFilter category={category} setCategory={setCategory} search={search} setSearch={setSearch}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
            getData?.products?.length>0?getData?.products?.map((product)=>{
                 return <ProductCart key={product.id}  product={product} />
            }):data?.products?.map((product) => (
              <ProductCart key={product.id}  product={product} />
        ))
        }
      </div>
      
    </div>
  );
}

export default ProductPage