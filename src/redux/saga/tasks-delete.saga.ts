import { put, delay, cancelled, takeLatest, select } from 'redux-saga/effects'
import { IStore } from '../interfaces/root-store.interface'

export function* tasksDeleteSaga(action) {
  try {
    const tasksStore = yield select((state: IStore) => state.tasksStore)
    const tasksFilterList = tasksStore.tasks.filter((task, index) => (index !== action.tasksId) && task)
    const tasksResponse = yield delay(200, tasksFilterList)
    yield put({ type: 'TASKS_FETCH', payload: tasksResponse })
  }
  catch (e) {
    yield put({ type: 'TASKS_ERROR', payload: e })
    if (yield cancelled()) yield put({ type: 'TASKS_CLEAN' })
  }
}

export function* tasksDeleteWatcher() {
  yield takeLatest('TASKS_DELETE', tasksDeleteSaga)
}
