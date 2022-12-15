import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
// passing counter1 from parent component
@Input() counter1:number=0;
@Output() increament:EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }es(changes: SimpleChanges):void{ //it will be called every singke time u r going to increament value.
    console.log("ngOnChanges child component");
  }
  ngOnInit(): void {
    console.log("ngOnInit() child component")
    console.log(this.counter1);
  }

  increamentCounter(){
    this.increament.emit(++this.counter1);//we are handling this increament in parent
  }
}
