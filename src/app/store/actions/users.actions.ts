import { createAction, props } from '@ngrx/store'


export enum EusersActions {
  addUser = '[Users] add user'
}

export const addUser = createAction(EusersActions.addUser, props<{ name: string }>())
