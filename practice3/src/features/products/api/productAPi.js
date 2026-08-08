import axios from 'axios'
import { apiInstance } from '../../../config/apiInstance';

export const getAllProducts=async()=>{
    try {
        const res= await apiInstance('/products')
        console.log(res.data);
        return res.data
    } catch (error) {
        console.log("error");
        
    }
}

