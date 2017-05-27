import { Action } from '@ngrx/store';
import { Todo } from '../models/todo';

export const ADD_TODO = 'Add Todo';
export const DELETE_TODO = 'Delete Todo';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public payLoad: Todo) {}
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(public payLoad: Todo) {}
}

export type Action = AddTodoAction | DeleteTodoAction;

