import { Component, OnInit } from '@angular/core';
import { IeventState, initialEventsState } from '../../store/state/events.state'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { deleteEvent } from '../../store/actions/events.actions'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  events$: Observable<IeventState[]>

  events: IeventState[] = initialEventsState

  constructor(private store: Store<{ events: IeventState[] }>) {
    this.events$ = store.select('events')
  }

  ngOnInit(): void {
  }

}
