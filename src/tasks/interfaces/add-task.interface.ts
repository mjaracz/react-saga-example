import { Dispatch, SetStateAction } from 'react'

export interface IAddTaskProps {
  isOpen: boolean
  handleAddTaskIcon: () => void
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
}
