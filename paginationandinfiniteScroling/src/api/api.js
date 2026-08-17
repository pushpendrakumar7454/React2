import axios from "axios";

export const apiInstance=async(limit,page=1)=>{
    try {
        let res= await axios.get(`https://dummyjson.com/products?limit=${limit}&page=${limit*page}`)
        console.log(res.data);
        
        return res.data

    } catch (error) {
        console.log(error);
        
    }
}