import { stdChannel } from 'redux-saga'
import { EventEmitter } from 'events'


export const createSagaIO = (emitter: EventEmitter) => {
  const channel = stdChannel()
  emitter.on('action', channel.put)

  return {
    channel,
    dispatch: action => emitter.emit('action', action),
    getState: () => ({})
  }
}
