import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductService } from 'src/app/utility/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductDetailsComponent implements OnInit {
  id:any;
  product:any;
  constructor(private activatedRoute:ActivatedRoute, private _productService:ProductService) {

   }

  //it's one of the life cycle method and will be automatically called only once;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      //console.log("id)"+this.id);

      //getting product by id
      this.product=this._productService.getById(this.id);
        });
  }

}