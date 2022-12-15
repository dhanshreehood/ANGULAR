import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductApiService } from 'src/app/utility/product-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
id:any;
product:any;
msg:string="";

addForm:FormGroup=this._formBuilder.group({
  productName:[''],
  price:['']  
});
  constructor(private _productServiceApi:ProductApiService, private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  addProduct(product:any){
    this._productServiceApi.appProduct(this.addForm.value).subscribe(
      response=>{console.log(response);
        this.msg=response},
        error=>{console.log("error: " + error.message), ()=>console.log("operation completed after everything happens successfully")}
    );
    
  }

}
