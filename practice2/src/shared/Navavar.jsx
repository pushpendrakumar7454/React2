import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'

const Navvar = () => {
   
   const{user}=useSelector((state)=>state.auth)

    return (
        <div className='flex justify-between items-center bg-black text-white p-6 text-xl'>
            <div className='w-60'>
                <h1>Lobo</h1>
            </div>
            <div className='flex gap-5'>
                <NavLink to="/main" end className={({isActive})=>isActive?"text-red-600 font-semibold":""}>Home</NavLink>
                <NavLink to="about" className={({isActive})=>isActive?"text-red-600 font-semibold":""} >About</NavLink>
                <NavLink to="product" className={({isActive})=>isActive?"text-red-600 font-semibold":""}>Product</NavLink>
            </div>
            <div className='flex gap-8 items-center'>
                <div>Hey: <span className='text-yellow-500 capitalize'>{user.username}</span></div>
               <NavLink>Cart</NavLink>
               <NavLink className={"bg-red-600 text-white px-3 py-1 rounded cursor-pointer active:scale-95"}>Logout</NavLink>
            </div>
        </div>
    )
}

export default Navvar

