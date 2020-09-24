import { put, delay, cancelled, takeLatest } from 'redux-saga/effects'
import { tasksMock } from '../mock/tasks.mock'

export function* tasksGetSaga() {
  try {
    const tasks = yield delay(500, tasksMock())
    yield put({ type: 'TASKS_FETCH', payload: tasks })
  }
  catch (e) {
    yield put({ type: 'TASKS_ERROR', payload: e })
    if (yield cancelled()) yield put({ type: 'TASKS_CLEAN' })
  }
}

export function* tasksGetWatcher() {
  yield takeLatest('TASKS_GET', tasksGetSaga)
}
