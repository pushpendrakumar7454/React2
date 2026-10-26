import React from 'react'
import Header from '../components/Header'
import Task from '../components/Task'

const Main = ({setToggle,task}) => {
  return (
    <div>
      <Header setToggle={setToggle}/>
      <Task task={task}/>
    </div>
  )
}

export default Main
