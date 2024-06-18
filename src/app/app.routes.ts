import { Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  { path: 'task', component: TodoListComponent },
  {
    path: 'task/:id',
    component: TodoFormComponent,
  },
];
