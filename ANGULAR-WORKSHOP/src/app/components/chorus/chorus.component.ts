import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chorus',
  templateUrl: './chorus.component.html',
  styleUrls: ['./chorus.component.scss']
})
export class ChorusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //chorus array
  chorus:Array<string> = ['Empty Dishwasher'];

  //finished chorus array
  finishedChorus:Array<string> = ['Launch prep code', 'Buy Groceries', 'Clean klitchen', 'Call mom'];

  targetImage:string="../assets/images/arrow.jpg";
}
