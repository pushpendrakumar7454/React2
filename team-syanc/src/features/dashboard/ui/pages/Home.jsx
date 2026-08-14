import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../../../shared/state/themeSlice'

const Home = () => {

  const dispatch=useDispatch()

  const changeTheme=()=>{
    dispatch(toggleTheme())
  }
  return (
    <div>
      home  hu me dahboard ka
         <button onClick={()=>changeTheme()} className='cursor-pointer active:scale-95'>theme Changer</button>
    </div>
  )
}

export default Home
