import { Component } from '@angular/core';

@Component( {
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
} )
export class BasicosComponent {

  nombreLower: string = 'jake';
  nombreUpper: string = 'JAKE';
  nombreCompleto: string = 'jAkE fERnanDez';

  fecha: Date = new Date();

}
