import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { ITasksStore } from '../../redux/interfaces/tasks-store.interface'

export interface IUseAddTask {
  descriptionTask: string
  handleSetDescriptionTask: (event: ChangeEvent<HTMLInputElement>) => void
  handleSetTitleTask: (event: ChangeEvent<HTMLInputElement>) => void
  titleIsRequired: boolean
  handleAddTask: () => Promise<void>
  titleTask: string
  setTitleTask: Dispatch<SetStateAction<string>>
}

export interface IUseTask {
  handleOpenDesc: () => void
  handleDeleteTask: (id: number) => void
  isOpenDesc: boolean
}

export interface IUseTasksList {
  handleAddTaskIcon: () => void
  tasksStore: ITasksStore
  isOpenModal: boolean
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
}
