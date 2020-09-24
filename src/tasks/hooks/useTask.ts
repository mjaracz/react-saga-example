import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IUseTask } from '../interfaces/hooks.interface'

export const useTask = (): IUseTask => {
  const [ isOpenDesc, setIsOpenDesc ] = useState(false)
  const dispatch = useDispatch()

  const handleOpenDesc = () => {
    setIsOpenDesc(!isOpenDesc)
  }
  const handleDeleteTask = async (id: number) => {
    await dispatch({ type: 'TASKS_DELETE', tasksId: id })
  }

  return {
    handleOpenDesc,
    handleDeleteTask,
    isOpenDesc
  }
}
