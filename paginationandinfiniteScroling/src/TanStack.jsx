import { keepPreviousData, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { apiInstance } from './api/api'
import ProductCart from './components/ProductCart'

const TanStack = () => {


   const [page, setPage] = useState(0)
   let limit=10

    const {data,isPending,error,isPlaceholderData}=useQuery({
        queryKey:['products',page],
        queryFn:()=>apiInstance(limit,page),
        placeholderData:keepPreviousData
    })
    if(isPending) return <h1>Pending</h1>

    const totalPages=Math.ceil(data.total/limit)
    return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div
         style={{opacity: isPlaceholderData?0.3:1}}
       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 p-5">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="text-white bg-yellow-500 rounded px-3 py-2 cursor-pointer active:scale-95 text-xl"
        >
          Prev
        </button>
        <h2>
          Page No {page + 1} / {totalPages}
        </h2>
        <button
        disabled={page>=totalPages-1}
          onClick={() => setPage(page + 1)}
          className="text-white bg-yellow-500 rounded px-3 py-2 cursor-pointer active:scale-95 text-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TanStack
