import { delay, put, takeLatest, cancelled, select } from 'redux-saga/effects'
import { IStore } from '../interfaces/root-store.interface'

export function* tasksAddSaga(action) {
  try {
    const tasksStore = yield select((state: IStore) => state.tasksStore)
    tasksStore.tasks.push(action.addedTask)
    const tasksResponse = yield delay(300, tasksStore.tasks)
    yield put({ type: 'TASKS_FETCH', payload: tasksResponse })
  }
  catch (e) {
    yield put({ type: 'TASKS_ERROR', payload: e })
    if (yield cancelled()) yield put({ type: 'TASKS_CLEAN' })
  }
}

export function* tasksAddWatcher() {
  yield takeLatest('TASKS_ADD', tasksAddSaga)
}
