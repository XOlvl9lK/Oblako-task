import { Action, createAction, props } from '@ngrx/store'
import { ItrainerState } from '../state/trainers.state'



export enum EtrainersActions {
  addTrainer = '[Trainers] add trainer',
  deleteTrainer = '[Trainers] delete trainer',
}

export const addTrainer = createAction(EtrainersActions.addTrainer, props<{ trainer: ItrainerState }>())
export const deleteTrainer = createAction(EtrainersActions.deleteTrainer, props<{ id: number }>())
