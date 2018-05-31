import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable} from 'rxjs';
import { AddtodosComponent } from './addtodos/addtodos.component';
import { Todo } from './models/todo';
import { AddTodoAction, DeleteTodoAction, CompleteTodoAction } from './actions/todoaction';
import * as fromRoot from './reducers/rootruducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.todos$  = store.pipe(select(fromRoot.getToDos));
  }

  addToDoRequest(val: Todo) {
    this.store.dispatch(new AddTodoAction(val));
  }

  deleteToDoRequest(val: Todo) {
    this.store.dispatch(new DeleteTodoAction(val));
  }

  completeToDoRequest (val: Todo) {
    this.store.dispatch(new CompleteTodoAction(val));
  }

}
