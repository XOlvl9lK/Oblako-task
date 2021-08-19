import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { toggleSideBar } from '../store/actions/toggle-side-bar.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<{ sideBar: boolean }>) { }

  toggleSideBar() {
    this.store.dispatch(toggleSideBar())
  }

  ngOnInit(): void {
  }

}
