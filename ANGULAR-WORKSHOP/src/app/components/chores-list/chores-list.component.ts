import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chores-list',
  templateUrl: './chores-list.component.html',
  styleUrls: ['./chores-list.component.scss']
})
export class ChoresListComponent implements OnInit {

  constructor() { }
  //chorus array
  chorus:Array<string> = ['wake up', 'drink water', 'Exercise', 'eat', 'sleep'];

  ngOnInit(): void {
  }
  chorus1(){
    return this.chorus[0];
  }
  chorus2(){
    return this.chorus[1];
  }
  chorus3(){
    return this.chorus[2];
  }
  chorus4(){
    return this.chorus[3];
  }  
  chorus5(){
    return this.chorus[4];
  }
}
