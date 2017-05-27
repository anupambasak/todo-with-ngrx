import * as todo from '../actions/todoaction';
import { Todo } from '../models/todo';

export interface State {
  todos: Todo[];
}

const initialState: State = {
  todos: []
};

let toseq = 0;

export function reducer( state = initialState, action: todo.Action): State {
  switch (action.type) {
    case todo.ADD_TODO: {
      const payLoadTodo: Todo = action.payLoad;
      payLoadTodo.id = toseq++;
      return Object.assign({}, state, {
        todos: [...state.todos, payLoadTodo]
      });
    }
    case todo.DELETE_TODO: {
      const payLoadTodo: Todo = action.payLoad;
      return Object.assign({}, state, {
        todos: state.todos.filter(d => d.id !== payLoadTodo.id)
      });
    }
    default: {
      return state;
    }
  }
}

export const getTodos = (state: State) => state.todos;
