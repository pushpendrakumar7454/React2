import React from 'react'
import Header from '../components/Header'
import Task from '../components/Task'

const Main = ({setToggle,task,onDelete}) => {
  return (
    <div>
      <Header setToggle={setToggle} onDelete={onDelete}/>
      <Task task={task}/>
    </div>
  )
}

export default Main
