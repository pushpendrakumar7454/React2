import React from 'react'
import {NavLink} from 'react-router'

const Navvar = () => {
  return (
    <div className='bg-black text-white text-xl flex justify-between items-center p-5'>
      <div>
        Lobo
      </div>
      <div className='flex gap-7'>
        <NavLink>homwe</NavLink>
         <NavLink>about</NavLink>
          <NavLink>contact</NavLink>
      </div>
      <div>
        <NavLink to='/login'>Logout</NavLink>
      </div>
    </div>
  )
}

export default Navvar
