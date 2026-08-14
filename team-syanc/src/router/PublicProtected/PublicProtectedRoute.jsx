import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicProtectedRoute = () => {


 const {employee, isLoading}= useSelector((state)=>state.auth)
 if(isLoading) return <h1>Loading</h1>
 if(employee){
  return <Navigate to="/main" replace/>
 }

  return <Outlet/>
}

export default PublicProtectedRoute
