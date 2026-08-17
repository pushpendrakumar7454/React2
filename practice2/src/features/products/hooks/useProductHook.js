import { useQuery } from "@tanstack/react-query"
import { getAllProducts, getAllProductsCategory, getproductbyCategory } from "../api/prodcutApi"
import { useEffect, useState } from "react"


export const allProducts = () => {


    const [search, setSearch] = useState(null)
    const [debouncing, setDebouncing] = useState(null)


    useEffect(() => {
        let timeout = setTimeout(() => {
            setDebouncing(search)
        }, 1000)
        return () => clearTimeout(timeout)
    }, [search])

    const { data, isPending, error } = useQuery({
        queryKey: ["products", debouncing],
        queryFn: () => getAllProducts(debouncing),

    })
    return {
        data,
        isPending,
        error,
        search,
        setSearch
    }
}

export const allProductsCategor = () => {
    const { data, isPending, error } = useQuery({
        queryKey: ['category'],
        queryFn: getAllProductsCategory,

    })

    return {
        data,
        isPending,
        error
    }

}


export const searchbyCategory = () => {
    const [category, setCategory] = useState(null)
    const { data, isPending, error } = useQuery({
        queryKey: ['searchbyCategory', category],
        queryFn: () => getproductbyCategory(category),
    })
    return {
        data,
        isPending,
        error,
        category,
        setCategory
    }
}