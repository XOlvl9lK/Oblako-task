import { createAction, props } from '@ngrx/store'
import { IeventState, InewEvent } from '../state/events.state'


export enum EeventsActions {
  addEvent = '[Events] add event',
  deleteEvent = '[Events] delete event',
  updateEvent = '[Events] update event'
}

export const addEvent = createAction(EeventsActions.addEvent, props<{ title: string, day: number, month: string, time: string, year: number }>())
export const deleteEvent = createAction(EeventsActions.deleteEvent, props<{ id: number }>())
export const updateEvent = createAction(EeventsActions.updateEvent, props<{ id: number, title: string, day: number, month: string, time: string, year: number }>())
