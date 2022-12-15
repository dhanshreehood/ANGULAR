import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Product';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  //it will return object of all the matching element
  transform(products: Product[], args: string):Product[] {
    let searchStr:string=args.toLocaleLowerCase();
     return products.filter(products=>{
      let productName= products.productName.toLocaleLowerCase();
    
      // indexOf will search for each and every character; youncan use equals method to search for the exact string
      return productName.indexOf(searchStr)!==-1 //if string is not there, it will return -1
    }); 
  }
}
