import { ErrorInfo } from 'react'
import { ITask } from '../../tasks/interfaces/task.interface'

export interface ITasksStore {
  isLoading: boolean
  error: ErrorInfo | object
  tasks: ITask[]
}
