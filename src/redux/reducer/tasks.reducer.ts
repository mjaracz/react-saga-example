import { ITasksStore } from '../interfaces/tasks-store.interface'

const initialState = {
  tasks: [],
  isLoading: false,
  error: {}
}
export const tasksReducer = (state: ITasksStore = initialState, action) => {
  switch (action.type) {
    case 'TASKS_GET': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'TASKS_DELETE': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'TASKS_ADD': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'TASKS_FETCH': {
      return {
        ...state,
        isLoading: false,
        tasks: action.payload
      }
    }
    case 'TASKS_ERROR': {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    case 'TASKS_CLEAN': {
      return {
        ...state,
        isLoading: false,
        tasks: [],
      }
    }
    default: {
      return state
    }
  }
}
