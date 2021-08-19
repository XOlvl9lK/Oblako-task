import { Action, createAction } from '@ngrx/store'

export enum EsidebarAction {
  toggleSideBar = '[SideBar] toggle'
}

export const toggleSideBar = createAction(EsidebarAction.toggleSideBar)
