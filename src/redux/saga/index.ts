import { all } from 'redux-saga/effects'
import { tasksGetWatcher } from './tasks-get.saga'
import { tasksDeleteWatcher } from './tasks-delete.saga'
import { tasksAddWatcher } from './tasks-add.saga'

export function* rootSaga() {
  yield all([tasksGetWatcher(), tasksDeleteWatcher(), tasksAddWatcher()])
}
