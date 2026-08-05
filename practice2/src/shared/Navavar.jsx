import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'

const Navvar = () => {
   
   const{user}=useSelector((state)=>state.auth)

    return (
        <div className='flex justify-between items-center bg-black text-white p-5 text-xl'>
            <div>
                <h1>Lobo</h1>
            </div>
            <div className='flex gap-5'>
                <NavLink to="/main" end className={({isActive})=>isActive?"text-red-600 font-semibold":""}>Home</NavLink>
                <NavLink to="about" className={({isActive})=>isActive?"text-red-600 font-semibold":""} >About</NavLink>
                <NavLink to="prodcuts" className={({isActive})=>isActive?"text-red-600 font-semibold":""}>Product</NavLink>
            </div>
            <div className='flex gap-5 items-center'>
                <div>Hey: <span className='text-yellow-500 capitalize'>{user.username}</span></div>
               <NavLink>Cart</NavLink>
               <NavLink>Logout</NavLink>
            </div>
        </div>
    )
}

export default Navvar

