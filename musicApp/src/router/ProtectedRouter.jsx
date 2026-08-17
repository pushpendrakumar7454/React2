import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { Navigate, Outlet } from 'react-router'

const ProtectedRouter = () => {
    const {currentUser}=useContext(MyContext)
    if(!currentUser){
        return <Navigate to="/login" replace/>

    }
    return <Outlet/>
}

export default ProtectedRouter
