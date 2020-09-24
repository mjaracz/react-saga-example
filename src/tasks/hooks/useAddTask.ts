import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { IUseAddTask } from '../interfaces/hooks.interface'

export const useAddTask = (setIsOpenModal: Dispatch<SetStateAction<boolean>>): IUseAddTask => {
  const dispatch = useDispatch()
  const [titleTask, setTitleTask] = useState<string>()
  const [descriptionTask, setDescriptionTask] = useState<string>()
  const [titleIsRequired, setTitleIsRequired] = useState(false)

  const handleAddTask = async () => {
    if(titleTask) {
      setTitleIsRequired(false)
      setIsOpenModal(false)
      await dispatch({ type: 'TASKS_ADD', addedTask: { title: titleTask, description: descriptionTask }})
    }
    else {
      setTitleIsRequired(true)
    }
  }
  const handleSetTitleTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTitleIsRequired(false)
    setTitleTask(event.target.value)
  }
  const handleSetDescriptionTask = (event: ChangeEvent<HTMLInputElement>) => {
    setDescriptionTask(event.target.value)
  }

  return {
    handleAddTask,
    handleSetDescriptionTask,
    handleSetTitleTask,
    titleIsRequired,
    titleTask,
    descriptionTask,
    setTitleTask
  }
}
