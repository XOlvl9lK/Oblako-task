import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { IeditableEventState } from '../../store/state/editableEvents.state'

@Component({
  selector: 'app-side-bar-body',
  templateUrl: './side-bar-body.component.html',
  styleUrls: ['./side-bar-body.component.scss']
})
export class SideBarBodyComponent implements OnInit {
  title: string = ''

  constructor(private store: Store<{ editableEvent: IeditableEventState }>) {
    store.select('editableEvent').subscribe(data => this.title = data.title)
  }

  ngOnInit(): void {
  }

}
