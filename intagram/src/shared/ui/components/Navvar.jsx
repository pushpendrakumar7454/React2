import React from 'react'
import NavLink from 'react-router'

const Navvar = () => {
  return (
    <div>
      <div>
        Lobo
      </div>
      <div>
        <NavLink></NavLink>
         <NavLink></NavLink>
          <NavLink></NavLink>
      </div>
      <div>
        <NavLink>Logout</NavLink>
      </div>
    </div>
  )
}

export default Navvar
