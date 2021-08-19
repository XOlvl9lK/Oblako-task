import { createReducer, on } from '@ngrx/store'
import { initialUsersState } from '../state/users.state'
import { addUser } from '../actions/users.actions'


export const usersReducer = createReducer(
  initialUsersState,
  on(addUser, (state, { name }) => [ ...state, { id: Date.now(), name }])
)
