import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import AsidNavvar from '../../features/dashboard/ui/components/AsidNavvar'
import TopNav from '../../features/dashboard/ui/components/TopNav'

const AdminLayout = () => {


  const {mode}=useSelector((state)=>state.theme)

  useEffect(()=>{
    if(mode==="light"){
      document.body.classList.add("light")
    }else{
      document.body.classList.remove("light")
    }
  },[mode])

  return (
    <div className='grid grid-cols-[1.5fr_7fr] min-h-screen'>
      <div className='border-r-2 border-gray-600 p-3'>
       <AsidNavvar/>
      </div>
   
     <div className=' flex gap-5 flex-col p-5'>
      <div><TopNav/></div>
      <div><Outlet/></div>
     </div>
    </div>
  )
}

export default AdminLayout;