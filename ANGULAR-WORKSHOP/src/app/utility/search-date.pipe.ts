import { Pipe, PipeTransform } from '@angular/core';
import { Movies } from './Movies';

@Pipe({
  name: 'searchDate'
})
export class SearchDatePipe implements PipeTransform {

  transform(movies: Movies[], args: Date): Movies[] {
    let searchStr:Date=args;
    return movies.filter(movies=>{
      let movieName = movies.releaseDate;
      //return movieName.filter(searchStr)!==-1;
    })

  }}