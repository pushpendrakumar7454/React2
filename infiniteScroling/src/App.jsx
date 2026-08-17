import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import React from 'react'
import { getProducts } from './api/producuApi'
import ProductCard from './components/ProductCard'

const App = () => {

   let limit=10

  const {data,isPending,fetchNextPage,isFetching } =
  useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({pageParam})=>getProducts({limit,pageParam}),
    initialPageParam: 0,
    getNextPageParam:(lastPage,allPage)=>{
      let loadedData=allPage.length*limit
      if(loadedData<=lastPage.total) return loadedData
      return undefined
    }
    
  });
  if(isPending) return <h1>Pending</h1>
  console.log(data);

  let allProducts=data.pages.flatMap((val)=>val.products)
  



  return (
   <div  className={`max-w-7xl mx-auto px-6 py-10 transition-opacity duration-300 ${
      isFetching ? "opacity-50" : "opacity-100"
    }`}>
    <div
  
     className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {allProducts?.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
 <div className='flex items-center justify-center p-4 text-xl'>
   <button onClick={()=>fetchNextPage()} className='cursor-pointer active:scale-95'>Loading</button>
 </div>
</div>
  )
}

export default App
