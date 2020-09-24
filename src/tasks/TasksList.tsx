import React, { FC } from 'react'
import { useTasksList } from './hooks/useTasksList'
import { Task } from './Task'
import { CircularProgress, List, ListItemIcon, ListSubheader } from '@material-ui/core'
import { AddOutlined } from '@material-ui/icons'
import { AddTask } from './AddTask'
import './styles/tasks-list.css'

export const TasksList: FC = () => {
  const { tasksStore, handleAddTaskIcon, isOpenModal, setIsOpenModal } = useTasksList()

  if (tasksStore.isLoading) {
    return (
      <CircularProgress className="tasks--circular" size={120}/>
    )
  }

  return (
    <List
      component="main"
      className="tasks"
      aria-labelledby="subheader"
      subheader={
        <ListSubheader className="tasks__subheader" component="div" id="subheader">
          Default To-Do list, add your tasks
        </ListSubheader>
      }
    >
      {
        tasksStore.tasks.map((task, index) =>
          <Task key={index} id={index} title={task.title} description={task?.description}/>
        )
      }
      <ListItemIcon className="tasks__addTaskIcon" onClick={handleAddTaskIcon}>
        <AddOutlined/>
      </ListItemIcon>
      <AddTask isOpen={isOpenModal} handleAddTaskIcon={handleAddTaskIcon} setIsOpenModal={setIsOpenModal} />
    </List>
  )
}
