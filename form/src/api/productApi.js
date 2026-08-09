import { apiInstance } from "../config/apiInstance";

export const getAllProrductApi = async() => {
    try {
        const res = await apiInstance("/products/search?q=phone");
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};



export const getAllCategory = async() => {
    try {
        const res = await apiInstance("/products/categories")
        return res.data
    } catch (error) {
        console.log(error);

    }
}


export const seacrhProductbyCategory = async(category) => {
    try {
        const res = await apiInstance(`/products/category/${category}`)
        return res.data

    } catch (error) {
        console.log(error);

    }
}