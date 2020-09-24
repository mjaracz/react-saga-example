import { combineReducers } from 'redux'
import { tasksReducer } from './tasks.reducer'

export const rootReducer = combineReducers({
  tasksStore: tasksReducer
})
