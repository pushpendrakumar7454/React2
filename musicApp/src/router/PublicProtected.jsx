import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { Navigate, Outlet } from 'react-router'

const PublicProtected = () => {
    const {currentUser}=useContext(MyContext)
    if(currentUser){
        return <Navigate to="/" replace/>
    }
    return <Outlet/>
}

export default PublicProtected
