import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   //adding Product type to products
  products:Product[]=[{"productId":1001, "productName":"TV", "price":100000, "image":"../assets/images/tv.jpg"},
  {"productId":1002, "productName":"Mobile", "price":1069869, "image":"../assets/images/phone.jpg"},
  {"productId":1003, "productName":"Laptop", "price":10565, "image":"../assets/images/laptop.jpg"},
  {"productId":1004, "productName":"Headphone", "price":8596843, "image":"../assets/images/hp.jpg"},
  {"productId":1005, "productName":"Refrigerator", "price":797555, "image":"../assets/images/refrigerator.jpg"}
]

  constructor() { }

  getAllProduct():Product[]{
    return this.products;
  }

  getById(id:number):any{
    return this.products.find(product => product.productId == id); //find returns first matching element; filter returns alll the matching elements; and here we are assuming id as a unique vale.
  //if product is there it will return value but if it's not it will return undefined.
  }
}
