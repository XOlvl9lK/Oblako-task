import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core'
import { IeventState } from '../../../store/state/events.state'
import { Store } from '@ngrx/store'
import { deleteEvent } from '../../../store/actions/events.actions'
import { IeditableEventState } from '../../../store/state/editableEvents.state'
import { toggleSideBar } from '../../../store/actions/toggle-side-bar.actions'
import { EventService } from '../../../services/EventService'

@Component({
  selector: 'app-context-modal',
  templateUrl: './context-modal.component.html',
  styleUrls: ['./context-modal.component.scss']
})
export class ContextModalComponent implements OnInit {

  @Input() item!: IeventState
  @Output() delete = new EventEmitter()
  @Output() edit = new EventEmitter()

  @HostListener('window:click')
  hideContextModal(): void {
    this.delete.emit(0)
  }

  constructor(private store: Store<{ events: IeventState[], editableEvent: IeditableEventState, sideBar: boolean }>) {}

  deleteEvent() {
    EventService.deleteEvent(this.store, this.item.id)
  }

  editEvent() {
    EventService.setEditableEvent(this.store, this.item)
    this.store.dispatch(toggleSideBar())
  }

  ngOnInit(): void {
  }

}
