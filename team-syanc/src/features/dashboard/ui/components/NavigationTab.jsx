import { ChartArea } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const NavigationTab = ({path,title,Icon}) => {
  return (
    <div>
      <NavLink className={"flex gap-4 pl-4"} to={path}>
        <ChartArea  size="20"/>
        {title}
      </NavLink>
    </div>
  )
}

export default NavigationTab
