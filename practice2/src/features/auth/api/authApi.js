import { apiInstance } from "../../../config/apiInstance";


export const loginUserapi=async(credentials)=>{
    try {
        let res= await apiInstance.post("/auth/login",credentials)
        console.log(res.data);
        localStorage.setItem("accessToken",res.data.accessToken)
        return res.data
        
    } catch (error) {
        console.log(error.response?.data || error);
        throw error
        
        
    }
}

export const hydredUser=async()=>{
    const token=localStorage.getItem("accessToken")
    try {
        let res= await apiInstance.get("/auth/me",{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        console.log(res.data);
        
        return res.data

    } catch (error) {
        console.log(error);
        
    }
}