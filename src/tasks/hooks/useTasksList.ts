import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../redux/interfaces/root-store.interface'
import { IUseTasksList } from '../interfaces/hooks.interface'

export const useTasksList = (): IUseTasksList => {
  const dispatch = useDispatch()
  const tasksStore = useSelector((state: IStore) => state.tasksStore)
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    dispatch({ type: 'TASKS_GET' })
  }, [dispatch])
  const handleAddTaskIcon = () => {
    setIsOpenModal(!isOpenModal)
  }

  return {
    handleAddTaskIcon,
    tasksStore,
    isOpenModal,
    setIsOpenModal
  }
}
