import axios from 'axios'


export const axiosInstanceApi= axios.create({
    baseURL:"https://dummyjson.com",
    withCredentials:true
})