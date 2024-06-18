import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { todoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { TodoModel } from '../todo.model';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent implements OnInit {
  title:string = "";
  userId:number = 0;
  completed:boolean = false;
  todo:TodoModel = new TodoModel();
  options: any[] = [];
  id:any
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public service: todoService
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.setOptions();
    this.id = id;
    if (id == 0) {
    } else {
      this.service.getById(id).subscribe((record: any) => {
        this.todo = record;
        // this.title = record.title;
        // this.userId = record.userId;
        // this.completed = record.completed;
      });
    }
  }

  addOrUpdate() {
    if(this.id == 0) {
      this.service.post(this.todo).subscribe((x)=>{
        this.todo = x
      })
    } else {
      this.service.put(this.todo).subscribe((x)=>{
        this.todo = x
      })
    }
  }



  setOptions() {
    this.service.getAllUsers().subscribe((res: any) => {
      let options: any[] = [];
      let users: any[] = res;
      if (users?.length) {
        users.forEach((x) => {
          options.push({ id: x.id, name: x.name });
        });
        this.options = options;
        console.log(options);
      }
    });
  }

  cancel() {
    this.router.navigateByUrl("/task")
  }
}
