import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {
   
    const {user,isLoading}=useSelector((state)=>state.auth)
    if(!user){
        return <Navigate to="/" replace/>
    }
     
    if(isLoading){
        return <h1>IsLoading</h1>
    }



    return <Outlet/>
}

export default ProtectedRoute
