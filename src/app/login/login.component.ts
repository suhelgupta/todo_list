import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { userModel } from './login.model';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  error:string = ''
  user:userModel = new userModel();
  userData:userModel[] = []
  constructor(public router:Router,public http:HttpClient) {
  }

  ngOnInit(): void {
    this.getAllLoginData();
  }

  login() {
    let user = this.userData.find(x=> x.userName == this.user.userName && x.password == this.user.password);

    if(user) {
      this.router.navigateByUrl("/task")
    } else {
      this.error = "Login Fail"
    }
  }

  async getAllLoginData() {
    this.userData = await firstValueFrom(this.http.get("../../assets/login.json")) as any;
  }

}
