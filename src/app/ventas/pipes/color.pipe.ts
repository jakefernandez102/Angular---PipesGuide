import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'color'
} )
export class ColorPipe implements PipeTransform {

  transform( value: number, ...args: unknown[] ): string {

    return ( value === 0 )
      ? 'rojo'
      : ( value === 1 )
        ? 'negro'
        : ( value === 2 )
          ? 'azul'
          : 'verde';
  }

}
