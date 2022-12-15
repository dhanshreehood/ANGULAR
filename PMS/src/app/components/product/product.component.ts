import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from 'src/app/utility/Product';
import { ProductService } from 'src/app/utility/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // if ur adding keyword it will take it as a property ; short cut provided by typescript
  constructor(private _router:Router, private _productService:ProductService) { //injecting ProductService here
    
   }

   searchBy:string="";

   //retrieving all the product here from ProductService
   products:Product[]=[];
 
  ngOnInit(): void {
    this.products=this._productService.getAllProduct();
  }
  
getProduct(productId:number){
  this._router.navigate(['/getProduct/'+productId]); //getProduct is coming from html after click through data binding.
}
}

/*when ur navigating from:
1. template: use router RouterLink
2. component: use Router.navigate
*/