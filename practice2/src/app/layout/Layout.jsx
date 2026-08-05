import React from 'react'
import Navavar from '../../shared/Navavar'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div>
            <Navavar/>
            <Outlet/>
        </div>
    )
}

export default Layout
