import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import React from 'react'
import { getProducts } from './api/producuApi'
import ProductCard from './components/ProductCard'

const App = () => {

   let limit=10

  const {data,isPending } =
  useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({pageParam})=>getProducts({limit,pageParam}),
    initialPageParam: 0,
    getNextPageParam:(lastPage,allPage)=>{
      let loadedData=allPage.length*limit
      if(loadedData>=lastPage-1) return loadedData
      return undefined
    }
    
  });
  if(isPending) return <h1>Pending</h1>
  console.log(data);
  



  return (
   <div className="max-w-7xl mx-auto px-6 py-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data?.pages[0]?.products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>
  )
}

export default App
