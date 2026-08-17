import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicProtecteRoute = () => {
   const {user,isLoading}=useSelector((state)=>state.auth)

   if(user){
    return <Navigate to="/main" replace/>
   }
   
   if(isLoading){
    return <h1>loading</h1>
   }
    return <Outlet/>
}

export default PublicProtecteRoute
