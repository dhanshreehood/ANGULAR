import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

 /* registerForm:FormGroup=new FormGroup({
    name:new FormControl('',  [Validators.required, Validators.minLength(3)]),
    email:new FormControl(''),
    password:new FormControl('')   
});
*/
registerForm:FormGroup=this._fb.group({
  name:['', [Validators.required,Validators.minLength(3)]],
  email:[''],
  password:['']  
});
  constructor(private _fb:FormBuilder) { } // injecting form builder, no need to write FormControl every time

  ngOnInit(): void {
  }

register(){
  console.log(this.registerForm.value)
}
}
