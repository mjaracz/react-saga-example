import React, {FC} from 'react'
import { Backdrop, Fade, Modal, TextField, IconButton } from '@material-ui/core'
import { AddCircleOutline } from '@material-ui/icons'
import { useAddTask } from './hooks/useAddTask'
import './styles/add-task.css'
import { IAddTaskProps } from './interfaces/add-task.interface'

export const AddTask: FC<IAddTaskProps> = ({ isOpen, handleAddTaskIcon, setIsOpenModal }) => {
  const { handleSetTitleTask, handleSetDescriptionTask, handleAddTask, titleIsRequired } = useAddTask(setIsOpenModal)
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="tasks__modal"
      open={isOpen}
      onClose={handleAddTaskIcon}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className="modal__content">
          <TextField className="content__textField" label="Task Title" onChange={handleSetTitleTask} error={titleIsRequired} helperText={ titleIsRequired ? 'title of task is required' : null } required />
          <TextField className="content__textField" label="Task Description" onChange={handleSetDescriptionTask} />
          <IconButton onClick={handleAddTask}>
            <AddCircleOutline/>
          </IconButton>
        </div>
      </Fade>
    </Modal>
  )
}
