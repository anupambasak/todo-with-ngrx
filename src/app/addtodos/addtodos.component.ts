import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.css']
})
export class AddtodosComponent implements OnInit {

  todoForm: FormGroup;
  todoInput: FormControl;
  @Output() addToDoEventRequest: EventEmitter<Todo>;


  constructor(builder: FormBuilder) {
    this.todoInput = new FormControl();
    this.todoForm = builder.group({
      toinput: this.todoInput
    });
    this.addToDoEventRequest = new EventEmitter<Todo>();
  }

  ngOnInit() {
  }

  addToDo() {
    const todo = new Todo();
    todo.description = this.todoInput.value;
    todo.completed = false;
    this.todoInput.reset();
    this.addToDoEventRequest.emit(todo);
  }

}
