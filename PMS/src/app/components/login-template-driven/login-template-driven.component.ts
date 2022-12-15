import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-template-driven',
  templateUrl: './login-template-driven.component.html',
  styles: [
  ]
})
export class LoginTemplateDrivenComponent implements OnInit {
user={
  "userName":"dhanshreeh",
  "passWord":"123456"
}
  constructor() { }

  ngOnInit(): void {
  }

  login(loginForm:NgForm){
    console.log(loginForm.value) //returns all value
    console.log(loginForm.controls['userName'].value);// it will return the specific value
  }

}
