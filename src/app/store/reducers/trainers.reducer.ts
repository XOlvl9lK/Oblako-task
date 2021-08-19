import { createReducer, on } from '@ngrx/store'
import { initialTrainersState } from '../state/trainers.state'
import { addTrainer, deleteTrainer } from '../actions/trainers.actions'


export const trainersReducer = createReducer(
  initialTrainersState,
  on(addTrainer, (state, { trainer }) => ([ ...state, { id: trainer.id, name: trainer.name }])),
  on(deleteTrainer, (state, { id }) => ([ ...state.filter(trainer => trainer.id !== id) ]))
)
