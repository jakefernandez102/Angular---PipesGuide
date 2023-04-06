import { Component } from '@angular/core';

import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component( {
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: []
} )
export class OrdenarComponent {

  enMayusculas: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
      enemigos: [ 'enemigo 1', 'Batman' ]
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
      enemigos: [ 'Pinguino', 'Superman' ]
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
      enemigos: [ 'Pinguino' ]
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
      enemigos: [ 'enemigo 1', 'Superman' ]
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
      enemigos: [ 'Enemigo 1', 'Enemigo 2' ]
    }
  ];

  colorMap = {
    '=0': 'rgb(198, 76, 76)',
    '=1': 'black',
    '=2': 'cornflowerblue',
    '=3': 'rgb(79, 170, 79)',
  };
  rojo: string = 'red';

  cambiarLettersCase() {
    this.enMayusculas = !this.enMayusculas;
  }
  cambiarOrden( value: string ) {
    this.ordenarPor = value;
  }




}
