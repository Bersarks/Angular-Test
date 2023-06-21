import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
  {path: "", redirectTo: "todos", pathMatch: "full"}, // pathmatch: full means that the path must be exactly the same as the path in the path property of the object or else it will not redirect. If prefix is used, then it will redirect to the path that starts with the path property of the object.
  {path: "todos", component: TodosComponent}, // path: "todos" means that the path will be localhost:4200/todos
  {path:"todos/:id", component: TodoDetailsComponent}, // path: "todos/:id" means that the path will be localhost:4200/todos/1 or localhost:4200/todos/2 or localhost:4200/todos/3 or localhost:4200/todos/4 or localhost:4200/todos/5 etc.
  {path: "contact", component: ContactComponent}, // path: "contact" means that the path will be localhost:4200/contact 
  {path: "**", component: NotFoundComponent} // path: "**" means that the path will be localhost:4200/anything
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot() is used for the root module of the application. forChild() is used for the child modules of the application.
  exports: [RouterModule] // exports: [RouterModule] means that the RouterModule will be available for use in the app module.
})
export class AppRoutingModule { }
