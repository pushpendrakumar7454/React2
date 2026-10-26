import React, { useState } from 'react'
import Header from './components/Header'
import KanbanForm from './components/KanbasForm'
import Main from './pages/Main'

const App = () => {

 const [toggle, setToggle] = useState(true)
 const [task, setTask] = useState(()=>{
  return JSON.parse(localStorage.getItem("task"))||[]
 })

 const onDelete=(id)=>{
  setTask((prev)=>{
    const updateData=prev.filter((t)=>t.id!==id)

    localStorage.setItem("task", JSON.stringify(updateData));
    return updateData
  })
 }

  return (
    <div>
   {toggle?<Main setToggle={setToggle} task={task} onDelete={onDelete}/>:<KanbanForm setToggle={setToggle} setTask={setTask}/>}
    </div>
  )
}

export default App
