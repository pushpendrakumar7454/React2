import React, { useState } from 'react'
import Header from './components/Header'
import KanbanForm from './components/KanbasForm'
import Main from './pages/Main'

const App = () => {

 const [toggle, setToggle] = useState(true)
 const [task, setTask] = useState(()=>{
  return JSON.parse(localStorage.getItem("task"))||[]
 })
 
  return (
    <div>
   {toggle?<Main setToggle={setToggle} task={task}/>:<KanbanForm setToggle={setToggle} setTask={setTask}/>}
    </div>
  )
}

export default App
