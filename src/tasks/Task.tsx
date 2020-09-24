import React, { FC, Fragment } from 'react'
import { ITaskProps } from './interfaces/task.interface'
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { ExpandLess, ExpandMore, AccessAlarm, Delete } from '@material-ui/icons'
import { useTask } from './hooks/useTask'
import './styles/task.css'

export const Task: FC<ITaskProps> = ({ title, description, id }) => {
  const { isOpenDesc, handleOpenDesc, handleDeleteTask } = useTask()
  return (
    <Fragment>
      <ListItem className="tasks__item" >
        <ListItemIcon>
          <AccessAlarm />
        </ListItemIcon>
        <ListItemText className="item__text" primary={title} />
        {
          description &&
          <div className="item__expend" onClick={handleOpenDesc}>
		        <span className="expend__text">description</span>
            { isOpenDesc ? <ExpandLess/> : <ExpandMore/> }
	        </div>
        }
        <ListItemIcon className="item__deleteIcon" onClick={() => handleDeleteTask(id)} >
          <Delete/>
        </ListItemIcon>
      </ListItem>
      <Collapse in={isOpenDesc} timeout="auto" unmountOnExit>
        <List className="tasks__item--expended" component="div" disablePadding>
          <ListItem>
            <ListItemText primary={description} />
          </ListItem>
        </List>
      </Collapse>
    </Fragment>
  )
}
