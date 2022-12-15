import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from 'src/app/utility/product-api.service';

@Component({
  selector: 'app-product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.scss']
})
export class ProductByIdComponent implements OnInit {
  id:number=0;
  product:any;

  constructor(private _service:ProductApiService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._activatedRoute.snapshot.params['id'];
    this.ProductDetails(this.id);
  }
  ProductDetails(id:number){
    this._service.getProductById(id).subscribe(_product => {
      console.log(id);
      this.product = _product;
    });
  }
}
