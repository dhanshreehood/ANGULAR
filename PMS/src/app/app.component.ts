import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //adding app-root will search for this selector and then 
  templateUrl: './app.component.html', //it will search for the given templateUrl of the app-root
  styleUrls: ['./app.component.scss'] //it will search for the given styleUrls of the app-root
})
export class AppComponent {
  title = 'PMS Application'; //by default this property is added.
  msg="Hello from Angular by msg";
  str:string="Hello from str!";
  url:string="../assets/images/img-1.jpg";

  getMsg():string{
    return this.msg;
  }

  sayHello(){
    alert("Hello from sayHello!");
  }

  fruits:string[]=["apple", "banana", "strawberry", "watermelon"];
  
  flag:boolean=true;
  showMe:boolean=false;

  num:number=1;
  number:number=1000;
  todaysDate:Date=new Date();
  name:string ="Dhanshree Hood";
}
