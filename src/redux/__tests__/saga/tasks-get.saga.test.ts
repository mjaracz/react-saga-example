import { runSaga } from 'redux-saga'
import { takeLatest } from 'redux-saga/effects'
import { tasksGetWatcher, tasksGetSaga } from '../../saga/tasks-get.saga'
import { createSagaIO } from '../../../utils/unitTest/createSagaIO'
import { EventEmitter } from 'events'
import * as tasksMock from '../../mock/tasks.mock'
import sinon from 'sinon'

describe('tasks-get.saga', () => {
  describe('tasksGetWatcher generator', () => {
    const genTaskGetWatcher = tasksGetWatcher()
    it('should wait for TASKS_GET action and call taskGetSaga', () => {
      expect(genTaskGetWatcher.next().value).toEqual(takeLatest('TASKS_GET', tasksGetSaga))
    })
  })
  describe('tasksGetSaga generator', () => {
    let genTasksGetSaga;
    beforeAll(async () => {
      await runSaga(createSagaIO(new EventEmitter()), tasksGetSaga).toPromise()
      genTasksGetSaga = tasksGetSaga();
    })
    describe('when delay tasksMock return tasks data correctly', () => {
      sinon.stub(tasksMock, 'tasksMock').callsFake(() => [{ title: 'some title' }])

      it('should get tasks from delay saga effects', () => {
        expect(genTasksGetSaga.next().value.payload.args[1]).toEqual([{ title: 'some title' }])
      })
      it('should put TASKS_FETCH action ', () => {
        expect(genTasksGetSaga.next().value.payload.action.type).toEqual('TASKS_FETCH')
      })
    })

  })
})
