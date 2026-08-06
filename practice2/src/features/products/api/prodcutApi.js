import { apiInstance } from "../../../config/apiInstance";

export const getAllProducts=async()=>{
    try {
        const res=await apiInstance("/products")
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}