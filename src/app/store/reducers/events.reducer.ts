import { createReducer, on } from '@ngrx/store'
import { IeventState, initialEventsState } from '../state/events.state'
import { addEvent, deleteEvent, updateEvent } from '../actions/events.actions'


export const eventsReducer = createReducer(
  initialEventsState,
  on(addEvent, (state, { title, day, month, time, year }) => [
    { id: Date.now(), day, month, time, year, title, totalMembers: 0, trainer: '', progress: 0, ended: false },
    ...state,
  ]),
  on(deleteEvent, (state, { id }) => [
    ...state.filter(e => e.id !== id)
  ]),
  on(updateEvent, (state, { id, title, day, month, time, year }) => [
    ...state.map(e => {
      if (e.id === id) {
        return { ...e, title, day, month, time, year }
      }
      return e
    })
  ])
)
