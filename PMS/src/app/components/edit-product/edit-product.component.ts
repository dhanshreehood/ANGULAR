import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/utility/Product';
import { ProductApiService } from 'src/app/utility/product-api.service';
import { ProductService } from 'src/app/utility/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  id: number = 0;
  product: any;

  editProductForm: FormGroup = this._formBuilder.group({
    productId: ['', [Validators.required]],
    productName: ['', [Validators.required]],
    price: ['', [Validators.required]],
  });

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private _formBuilder: FormBuilder,
    private _productAPI: ProductApiService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      console.log('id:' + this.id);
    });
    /*this.product = this._productService.getProductByID(this.id);*/
    this.product = this._productAPI
      .getProductById(this.id)
      .subscribe((res) => (this.product = res));
    console.log(this.product);
  }

  editProduct() {
    //this._productService.editProduct(this.editProductForm.value);
    this._productAPI
      .updateProduct(this.id, this.editProductForm.value)
      .subscribe((res) => console.log(res));
    console.log('updated');
    setTimeout(() => {
      this._router.navigate(['/products']);
    }, 1000);
  }
}