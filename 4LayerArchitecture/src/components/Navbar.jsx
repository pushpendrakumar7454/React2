import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-black text-white p-5 text-xl'>
            <div>
                <h1>Lobo</h1>
            </div>
            <div className='flex gap-3'>
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Product</NavLink>
            </div>
            <div className='flex gap-5 items-center'>
                <div>Hey: <span className='text-yellow-500'>Arun</span></div>
                <div>Cart</div>
                <div>Logout</div>
            </div>
        </div>
    )
}

export default Navbar
