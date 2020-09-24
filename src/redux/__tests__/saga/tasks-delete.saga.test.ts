import { tasksDeleteWatcher, tasksDeleteSaga } from '../../saga/tasks-delete.saga'
import { runSaga } from 'redux-saga'
import { takeLatest } from 'redux-saga/effects'
import { createSagaIO } from '../../../utils/unitTest/createSagaIO'
import { EventEmitter } from 'events'

describe('tasks-delete.saga', () => {
  describe('tasksDeleteWatcher generator', () => {
    const genTasksDeleteWatcher = tasksDeleteWatcher()
    it('should wait for TASKS_DELETE action and run tasksDeleteSaga', () => {
      expect(genTasksDeleteWatcher.next().value).toEqual(takeLatest('TASKS_DELETE', tasksDeleteSaga))
    })
  })
  describe('tasksDeleteSaga generator', () => {
    let genTasksDeleteSaga;
    beforeAll(async () => {
      await runSaga(createSagaIO(new EventEmitter()), tasksDeleteSaga, { type: 'TASKS_DELETE', tasksId: 2 })
      genTasksDeleteSaga = tasksDeleteSaga({ type: 'TASKS_DELETE', tasksID: 2 })
    })
    it('should  select tasks from global state',async () => {
      expect(genTasksDeleteSaga.next().value.type).toEqual('SELECT')
    })
    it('when tasks in global state is not defined should put TASKS_ERROR action', () => {
      const nextValue = genTasksDeleteSaga.next().value
      expect(nextValue.type).toEqual('PUT')
      expect(nextValue.payload.action.type).toEqual('TASKS_ERROR')
    });
  })
})
