import React, { useState } from 'react'
import Header from './components/Header'
import KanbanForm from './components/KanbasForm'

const App = () => {

 const [toggle, setToggle] = useState(false)
  return (
    <div>
   {toggle?<Header/>:<KanbanForm/>}
    </div>
  )
}

export default App
