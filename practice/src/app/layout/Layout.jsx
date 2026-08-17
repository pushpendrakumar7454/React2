import React from 'react'
import { Outlet } from 'react-router'
import Navvar from '../../shared/components/Navvar'

const Layout = () => {



    return (
        <div>
            <Navvar/>
            <Outlet/>
        </div>
    )
}

export default Layout
