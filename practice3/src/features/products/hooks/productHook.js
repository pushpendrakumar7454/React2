
import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../api/productAPi"



export const allProducts=()=>{
    const {data,isPending,error}=useQuery({
        queryKey:['products'],
        queryFn:getAllProducts
    })
    return {
        data,isPending,error
    }
}


