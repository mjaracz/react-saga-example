import React from 'react'
import { TasksList } from './TasksList'
import './styles/index.css'

export const Tasks = () => {
  return (
    <div className="tasks--container">
      <TasksList/>
    </div>
  )
}
