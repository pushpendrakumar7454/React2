import React from 'react'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div>
      <h1 className='text-red-600'>This is Navvar</h1>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout
