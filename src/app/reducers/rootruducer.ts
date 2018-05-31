import { ActionReducer, ActionReducerMap,
  createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromToDo from './todoreducer';

export interface State {
  todo: fromToDo.State;
}

export const reducers: ActionReducerMap<State>  = {
  todo: fromToDo.reducer
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getToDoState = (state: State) => state.todo;

export const getToDos = createSelector(getToDoState, fromToDo.getTodos);
