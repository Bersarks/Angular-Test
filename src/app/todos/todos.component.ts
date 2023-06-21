import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todoList:Todo[] = [];
  constructor(private todoService: TodoService) // The constructor function is used to inject the TodoService into the TodosComponent.
  {
    this.todoList = this.todoService.getTodoList(); // The getTodoList() function is called from the TodoService and the returned array of objects is assigned to the todoList property of the TodosComponent.
  }
}
