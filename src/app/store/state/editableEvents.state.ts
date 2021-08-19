export type editableEventTypes = 'new' | 'edit'

export interface IeditableEventState {
  id: number,
  title: string,
  day: number,
  month: string,
  time: string,
  year: number,
  typeE: editableEventTypes
}

export const initialEditableEvent: IeditableEventState = {
  id: 0,
  title: '',
  day: 0,
  month: '',
  time: '',
  year: 0,
  typeE: 'new'
}
