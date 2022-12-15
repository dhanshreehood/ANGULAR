import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, Observable, throwError } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  baseUrl="http://localhost:8080/product"; //path of springboot application
  //injecting http service inside our constructor
  constructor(private _httpClient:HttpClient) {

   }
   getData():Observable<Product>
   {
      return this._httpClient.get<Product>(this.baseUrl+"/").pipe(
        //filter(product.price>1000),
        ); //calling get data by using "/".
   }

   appProduct(product:any):Observable<any>{
      return this._httpClient.post(this.baseUrl+"/addProduct/",product, {responseType: 'JSON' as 'text'}).pipe(
        catchError((err)=>{
          console.log("error caught in service...")
          console.error(err.message);
          return throwError(err);
        })
      );
   }
  //  it will throw error message in console

   getProductById(id:number):Observable<Product>{
    return this._httpClient.get<Product>(this.baseUrl + "/" +id);
   }

   updateProduct(id:number, product:Product):Observable<Product>{
    return this._httpClient.put<Product>(this.baseUrl+"/put/"+id, product);
   }

   delete(id:number):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/delete/"+id);
   }

   deleteAll():Observable<any>{
    return this._httpClient.delete(this.baseUrl);
   }
}
