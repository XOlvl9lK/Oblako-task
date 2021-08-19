import { createReducer, on } from '@ngrx/store'
import { initialSideBarState } from '../state/toggleSideBar.state'
import { toggleSideBar } from '../actions/toggle-side-bar.actions'


export const sideBarReducer = createReducer(
  initialSideBarState,
  on(toggleSideBar, state => !state)
)
