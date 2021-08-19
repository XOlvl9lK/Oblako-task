import { createReducer, on } from '@ngrx/store'
import { initialEditableEvent } from '../state/editableEvents.state'
import { changeDay, changeMonth, changeTime, changeTitle, changeYear, setDefault, setId, setType } from '../actions/editableEvent.actions'


export const editableEventReducer = createReducer(
  initialEditableEvent,
  on(changeTitle, (state, { title }) => {
    return { ...state, title }
  }),
  on(changeDay, (state, { day }) => {
    return { ...state, day }
  }),
  on(changeMonth, (state, { month }) => {
    return { ...state, month }
  }),
  on(changeYear, (state, { year }) => {
    return { ...state, year }
  }),
  on(changeTime, (state, { time }) => {
    return { ...state, time }
  }),
  on(setType, (state, { typeE }) => {
    return { ...state, typeE: typeE }
  }),
  on(setId, (state, { id }) => {
    return { ...state, id }
  }),
  on(setDefault, state => {
    return { ...state, ...initialEditableEvent }
  })
)
