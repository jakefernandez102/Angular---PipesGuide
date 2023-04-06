import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuComponent } from './menu/menu.component';



@NgModule( {
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
} )
export class SharedModule { }
