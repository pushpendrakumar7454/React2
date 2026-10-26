import React from 'react'

const Header = () => {
  return (
    <div className='w-full p-4 bg-cyan-700 flex justify-between'>
          <div>
            <h1 className='text-white text-xl font-small'>Kanbas Board</h1>
          </div>
          <div>
            <button className='bg-cyan-900 text-white p-2 rounded cursor-pointer active:scale-95'>Add Task</button>
          </div>
    </div>
  )
}

export default Header
