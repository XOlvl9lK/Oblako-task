import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Store } from '@ngrx/store'
import { toggleSideBar } from '../../store/actions/toggle-side-bar.actions'
import { IeditableEventState } from '../../store/state/editableEvents.state'
import { IeventState } from '../../store/state/events.state'
import { setDefault } from '../../store/actions/editableEvent.actions'
import { EventService } from '../../services/EventService'

@Component({
  selector: 'app-side-bar-header',
  templateUrl: './side-bar-header.component.html',
  styleUrls: ['./side-bar-header.component.scss']
})
export class SideBarHeaderComponent implements OnInit {
  @Output() switch = new EventEmitter()
  @Input() currentTab!: string
  editableEvent!: IeditableEventState

  constructor(private store: Store<{ sideBar: boolean, editableEvent: IeditableEventState, event: IeventState[] }>) {
    store.select('editableEvent').subscribe((data: IeditableEventState) => this.editableEvent = data)
  }

  toggleSideBar() {
    this.store.dispatch(toggleSideBar())
    this.store.dispatch(setDefault())
  }

  classSelect(tab: string): string {
    return this.currentTab === tab ? 'side-bar__tabs_active': ''
  }

  addNewEvent() {
    if (EventService.isEditableEventNotEmpty(this.editableEvent)) {
      EventService.addNewEvent(this.store, this.editableEvent)
      this.store.dispatch(setDefault())
      this.store.dispatch(toggleSideBar())
    }
  }

  ngOnInit(): void {

  }

}
