import React from 'react'
import { allProducts } from '../../hooks/productHook';
import ProductCart from '../components/ProdductCart';

const ProductPage = () => {
  const {data,isPending,error}= allProducts()

  if(isPending) return <h1>Loading</h1>

    return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  );
}

export default ProductPage
