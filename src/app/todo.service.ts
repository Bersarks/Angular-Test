import { Injectable } from '@angular/core';
import { Todo } from './todo'; // The Todo interface is imported from the todo.ts file.

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodoList() : Todo []{ // This function returns an array of objects. Each object has three properties: id, name, and description. The id property is a number. The name property is a string. The description property is a string.
    return [
      {id: 1, name: "Go to the grocery store", description: "Buy milk, eggs, bread, and cheese."},
      {id: 2, name: "Go to the post office", description: "Mail the package to the client."},
      {id: 3, name: "Go to the bank", description: "Deposit the check."},
    ];
  }
}
