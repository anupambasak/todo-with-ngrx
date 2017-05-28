import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo';
import { DeleteTodoAction } from '../actions/todoaction';
import * as fromTodo from '../reducers/todoreducer';

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListtodosComponent implements OnInit {

  @Input() todos: Todo[];
  @Output() deleteToDoEventRequest: EventEmitter<Todo>;
  @Output() completeToDoEventRequest: EventEmitter<Todo>;

  constructor() {
    this.deleteToDoEventRequest = new EventEmitter<Todo>();
    this.completeToDoEventRequest = new EventEmitter<Todo>();
  }

  ngOnInit() {
  }

  deleteToDo(todo: Todo) {
    this.deleteToDoEventRequest.emit(todo);
  }

  completeToDo (val: boolean, todo: Todo) {
    const newtodo: Todo = Object.assign({}, todo, { completed: val });
    this.completeToDoEventRequest.emit(newtodo);
  }

}
