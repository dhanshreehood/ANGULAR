import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'convertSpaceTo'
})
export class ConvertSpaceToPipe implements PipeTransform {

  //value: represents on which data you want ot perform transformation
  //args:
  transform(value: string, args: string): string//return type 
  {
    return value.replace(' ', args);
  }

}
