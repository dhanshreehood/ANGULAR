import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from 'src/app/utility/product-api.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  id:number=0;
  product:any;

  constructor(private _service:ProductApiService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._activatedRoute.snapshot.params['id'];
    this.ProductDetails(this.id);
  }
  ProductDetails(id:number){
    this._service.delete(id).subscribe(_product => {
      console.log(id);
      this.product = _product;
    });
  }
}
