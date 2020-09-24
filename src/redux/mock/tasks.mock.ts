import { ITask } from '../../tasks/interfaces/task.interface'

export const tasksMock = (): ITask[] => [
  {
    title: 'clean table',
    description: 'table is located in the main room'
  },
  {
    title: 'fix window'
  },
  {
    title: 'buy milk',
    description: 'go to store in main street'
  }
]
