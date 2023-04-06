import { Pipe, PipeTransform } from '@angular/core';


@Pipe( {
  name: 'mayusculas'
} )
export class MayusculasPipe implements PipeTransform {



  transform(
    value: string,
    enMayusculas: boolean = !false
  ): string {

    return ( enMayusculas === false ) ? value.toLowerCase() : value.toUpperCase();
  }
}
