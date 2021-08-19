import { createAction, props } from '@ngrx/store'
import { editableEventTypes } from '../state/editableEvents.state'


export enum EeditableEventActions {
  changeTitle = '[EditableEvent] change title',
  changeDay = '[EditableEvent] change day',
  changeMonth = '[EditableEvent] change month',
  changeTime = '[EditableEvent] change time',
  changeYear = '[EditableEvent] change year',
  setDefault = '[EditableEvent] set default',
  setType = '[EditableEvent] set type',
  setId = '[EditableEvent] set id'
}

export const changeTitle = createAction(EeditableEventActions.changeTitle, props<{ title: string }>())
export const changeDay = createAction(EeditableEventActions.changeDay, props<{ day: number }>())
export const changeMonth = createAction(EeditableEventActions.changeMonth, props<{ month: string }>())
export const changeTime = createAction(EeditableEventActions.changeTime, props<{ time: string }>())
export const changeYear = createAction(EeditableEventActions.changeYear, props<{ year: number }>())
export const setType = createAction(EeditableEventActions.setType, props<{ typeE: editableEventTypes }>())
export const setId = createAction(EeditableEventActions.setId, props<{ id: number }>())
export const setDefault = createAction(EeditableEventActions.setDefault)
