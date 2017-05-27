import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AddtodosComponent } from './addtodos/addtodos.component';
import { ListtodosComponent } from './listtodos/listtodos.component';

// import * as fromTodoReducers from './reducers/todoreducer';
import { reducer } from './reducers/rootruducer';

@NgModule({
  declarations: [
    AppComponent,
    AddtodosComponent,
    ListtodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
