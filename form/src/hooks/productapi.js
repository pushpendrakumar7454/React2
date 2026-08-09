import { useQuery } from "@tanstack/react-query";
import { getAllCategory, getAllProrductApi, seacrhProductbyCategory } from "../api/productApi";
import { useState } from "react";

export const getProducts = () => {
    const [search, setSearch] = useState("")
    const { data, isPending, error } = useQuery({
        queryKey: ["products", search],
        queryFn: () => getAllProrductApi(search)
    });

    return { data, isPending, error, search, setSearch };
};

export const getCategory = () => {
    const { data, isPending, error } = useQuery({
        queryKey: ['category'],
        queryFn: getAllCategory
    })
    return { data, isPending, error }
}

export const searchbyCategory = () => {
    const [category, setCategory] = useState("");

    const { data, isPending, error } = useQuery({
        queryKey: ["searchcategory", category],
        queryFn: () => seacrhProductbyCategory(category),
        enabled: !!category,
    });

    return {
        data,
        isPending,
        error,
        category,
        setCategory,
    };
};