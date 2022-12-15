import { Pipe, PipeTransform } from '@angular/core';
import { Movies } from './Movies';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies: Movies[], args: string): Movies[] {
    let searchStr:string=args.toLocaleLowerCase();
    return movies.filter(movies=>{
      let movieName = movies.title.toLocaleLowerCase();
      return movieName.indexOf(searchStr)!==-1;
    })
  }

}
