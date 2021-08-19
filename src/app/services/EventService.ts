import { IeditableEventState } from '../store/state/editableEvents.state'
import { IeventState } from '../store/state/events.state'
import { Store } from '@ngrx/store'
import { changeDay, changeMonth, changeTime, changeTitle, changeYear, setId, setType } from '../store/actions/editableEvent.actions'
import { addEvent, deleteEvent, updateEvent } from '../store/actions/events.actions'

export class EventService {

  static editableToCalendarDateConcat(editableEvent: IeditableEventState): string {
    if (editableEvent.day !== 0 && editableEvent.year !== 0) {
      return editableEvent.day + ' ' + editableEvent.month + ' ' + editableEvent.year
    } else {
     return ''
    }
  }

  static toItemDateConcat(event: IeventState): string {
    return event.day + ' ' + event.month.substr(0, 3) + ', ' + event.time
  }

  static changeEditableEventDate(store: Store, day: number, month: string, year: number) {
    store.dispatch(changeDay({ day }))
    store.dispatch(changeMonth({ month }))
    store.dispatch(changeYear({ year }))
  }

  static changeEditableEventTime(store: Store, time: string): void {
    store.dispatch(changeTime({ time }))
  }

  static setEditableEvent(store: Store, item: IeventState): void {
    store.dispatch(setType({ typeE: 'edit' }))
    store.dispatch(setId({ id: item.id }))
    store.dispatch(changeTitle({ title: item.title }))
    this.changeEditableEventDate(store, item.day, item.month, item.year)
    this.changeEditableEventTime(store, item.time)
  }

  static addNewEvent(store: Store, editableEvent: IeditableEventState): void {
    if (editableEvent.typeE === 'new') {
      store.dispatch(addEvent({
        title: editableEvent.title,
        day: editableEvent.day,
        month: editableEvent.month,
        time: editableEvent.time,
        year: editableEvent.year
      }))
    } else if (editableEvent.typeE === 'edit') {
      store.dispatch(updateEvent({
        id: editableEvent.id,
        day: editableEvent.day,
        month: editableEvent.month,
        time: editableEvent.time,
        year: editableEvent.year,
        title: editableEvent.title
      }))
    }
  }

  static deleteEvent(store: Store, id: number): void {
    store.dispatch(deleteEvent({ id }))
  }

  static isEditableEventNotEmpty(editableEvent: IeditableEventState): boolean {
    return editableEvent.title !== ''
      && editableEvent.day !== 0
      && editableEvent.month !== ''
      && editableEvent.time !== ''
      && editableEvent.year !== 0;
  }
}
