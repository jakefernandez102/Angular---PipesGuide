import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component( {
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
} )
export class NoComunesComponent {


  //i18nSelect
  nombre: string = 'Jake';
  genero: string = 'masculino';


  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  //i18nPrular
  clientes: string[] = [ 'Maria', 'jake', 'Nicole', 'Kattia', 'Juank' ];

  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  };

  cambiarNombre() {
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }
  disminuirClientes() {
    this.clientes.pop();
  }


  //keyValue pipe
  persona = {
    nombre: 'Jake',
    edad: 26,
    direccion: 'San Jose, Costa Rica'
  };

  //jsonPipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true,
      enemigos: [ 'cryptonita', 'cyborg', 'smaillville' ]
    },
    {
      nombre: 'robin',
      vuela: false,
      enemigos: []
    },
    {
      nombre: 'aquaman',
      vuela: true,
      enemigos: []
    },
  ];
  enemigosMap = {
    '=0': 'Ningun Enemigo enlistado',
    'other': 'cantidad: #'
  };


  //async pipe / Obsevable

  miObservable = interval( 1000 );

  valorPromesa = new Promise( ( res, rej ) => {
    setTimeout( () => {
      res( 'Tenemos data de la promesa' );
    }, 3500 );
  } );

}
