import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/utility/product-api.service';

@Component({
  selector: 'app-demo-data',
  templateUrl: './demo-data.component.html',
  styleUrls: ['./demo-data.component.scss']
})
export class DemoDataComponent implements OnInit {

  data:any;
  product:any;
  constructor(private _service:ProductApiService) { }

  ngOnInit(): void {
  this._service.getData().subscribe(data=>{console.log(data);
  this.product=data;
  })
  }

}
