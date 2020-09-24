import { takeLatest } from 'redux-saga/effects'
import { runSaga } from 'redux-saga'
import { tasksAddSaga, tasksAddWatcher } from '../../saga/tasks-add.saga'
import { EventEmitter } from 'events'
import { createSagaIO } from '../../../utils/unitTest/createSagaIO'

describe('tasks-add.saga', () => {
  describe('tasksAddWatcher generator', () => {
    const genTaskAddWatcher = tasksAddWatcher()
    it('should wait for TASKS_ADD action and call tasksAddSaga', () => {
      expect(genTaskAddWatcher.next().value).toEqual(takeLatest('TASKS_ADD', tasksAddSaga))
    })
  })
  describe('tasksAddSaga generator', () => {
    const mockAction = { type: 'TASKS_ADD', addedTask: { title: 'mock' } }
    let generatorTasksAdd;
    beforeAll(() =>  {
      runSaga(createSagaIO(new EventEmitter()), tasksAddSaga, mockAction )
      generatorTasksAdd = tasksAddSaga(mockAction)
    })

    it('should try select current tasks from global state', () => {
      expect(generatorTasksAdd.next().value.type).toEqual('SELECT')
    })
    it('when tasks in global state is not defined should put TASKS_ERROR action', () => {
      const nextValue = generatorTasksAdd.next().value;
      expect(nextValue.type).toEqual('PUT');
      expect(nextValue.payload.action.type).toEqual('TASKS_ERROR');
    })
  })
})
