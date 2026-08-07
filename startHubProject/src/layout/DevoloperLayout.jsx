import React from 'react'
import { Outlet } from 'react-router'
import NavvarDevaloper from '../components/NavvarDevaloper'


const DevoloperLayout = () => {
    return (
        <div>
         <NavvarDevaloper/>
          <Outlet/>
        </div>
    )
}

export default DevoloperLayout
