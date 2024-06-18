import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoModel } from './todo.model';
@Injectable({
  providedIn: 'root'
})
export class todoService {
  constructor(public http:HttpClient) {
  }

  getAllTodos() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }

  getAllUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }



  getByUser(userId:number) {
    return this.http.get("https://jsonplaceholder.typicode.com/todos?userId="+userId)
  }

  getByData(todo:TodoModel) {
    let filter = ""
    if(todo.userId) {
      filter = "userId="+todo.userId;
    }
    if(todo.completed != null || todo.completed != undefined) {
      if(filter) filter = filter + "&"
      filter = filter + "completed="+todo.completed
    }
    return this.http.get("https://jsonplaceholder.typicode.com/todos?"+filter)
  }

  getByCompleted(isCompleted:boolean) {
    return this.http.get("https://jsonplaceholder.typicode.com/todos?userId=1&completed="+isCompleted)
  }

  getById(id:number) {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/"+id)
  }

  post(data:TodoModel) {
    return this.http.post("https://jsonplaceholder.typicode.com/todos",data)
  }

  put(data:TodoModel) {
    return this.http.put("https://jsonplaceholder.typicode.com/todos/"+data.id,data)
  }
}
