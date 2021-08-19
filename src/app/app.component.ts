import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { IsideBarState } from './store/state/toggleSideBar.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAndSlideInOut', [
      state('void', style({
        opacity: '0',
      })),
      transition('void <=> *', animate(100))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'oblako-task';
  sideBar$: Observable<IsideBarState>

  constructor(private store: Store<{ sideBar: IsideBarState }>) {
    this.sideBar$ = store.select('sideBar')
  }

  ngOnInit(): void {}
}
