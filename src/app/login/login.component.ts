import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  error:string = ''
  userName:string = ''
  passowrd:string = ''
  constructor(public router:Router) {
  }

  ngOnInit(): void {
  }

  login() {
    if(this.passowrd == 'p' && this.userName == "y") {
      this.router.navigateByUrl("/task")
    } else {
      this.error = "Login Fail"
    }
  }

}
