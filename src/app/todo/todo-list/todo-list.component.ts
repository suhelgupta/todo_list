import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { todoService } from '../todo.service';
import { HttpClientModule } from '@angular/common/http';
import { TodoModel } from '../todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
  options: any[] = [];
  tasks:TodoModel[] = [];
  filter:TodoModel = new TodoModel();
  users:any[] = [];
  isCompleted:boolean = true;
  constructor(public service:todoService,public router:Router) {

  }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((users:any)=>{
      this.users = users;
      this.setOptions()
      this.getAll()
    })
  }

  edit(id:any) {
    this.router.navigateByUrl("/task/"+id)
  }

  setOptions() {
      let options: any[] = [];
      if (this.users?.length) {
        this.users.forEach((x) => {
          options.push({ id: x.id, name: x.name });
        });
        this.options = options;
        console.log(options);
      }
  }


  getbyComplete(val:any) {
    this.service.getByData(this.filter).subscribe((tasks:any)=>{
      this.tasks = tasks;
    })
  }

  getAll() {
    this.service.getAllTodos().subscribe((tasks:any)=>{
      this.tasks = tasks;
    })
  }

  getUserName(id:any) {
    let user = this.users.find(x=>x.id == id).name
    console.log(user);

    return user;
  }
}
