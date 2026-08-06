import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../api/prodcutApi"

export const allProducts=()=>{
    const{data,isPending,error}=useQuery({
        queryKey:["products"],
        queryFn:getAllProducts
    })
    return {
        data,
        isPending,
        error
    }
}