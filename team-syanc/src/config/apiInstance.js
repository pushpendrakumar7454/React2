import axios from 'axios'
export const apiInstance = axios.create({
    baseURL: "https://team-sync-backend-n78w.onrender.com",
    withCredentials: true
})