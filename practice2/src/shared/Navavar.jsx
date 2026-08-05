import React from 'react'
import { NavLink } from 'react-router'

const Navavar = () => {
    return (
        <div className='flex justify-between bg-black text-white items-center p-4 text-xl'>
            <div>
                <h1>Lobo</h1>
            </div>
            <div className='flex gap-4 items-center'>
                <NavLink to="/main" end className={({isActive})=>isActive?"text-red-600 font-semibold":"text-white"}>Home</NavLink>
                <NavLink to="/main/about" className={({isActive})=>isActive?"text-red-600 font-semibold":"text-white"}>About</NavLink>
                <NavLink to="/main/products" className={({isActive})=>isActive?"text-red-600 font-semibold":"text-white"}>Products</NavLink>
            </div>
            <div className='flex gap-4 items-center'>
                <div>
                    <h1>Hey: <span className='text-yellow-600'>Arun</span></h1>
                </div>
                <div>
                    <NavLink>Cart</NavLink>
                </div>
                <div>
                    <NavLink>
                        Logout
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navavar
