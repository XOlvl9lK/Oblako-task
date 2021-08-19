import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { toggleSideBar } from '../store/actions/toggle-side-bar.actions'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {

  currentTab: string = 'main'

  constructor(private store: Store<{ sideBar: boolean }>) { }

  toggleSideBar(): void {
    this.store.dispatch(toggleSideBar())
  }

  switchTabs(tab: string): void {
    this.currentTab = tab
  }

  ngOnInit(): void {
  }

}
