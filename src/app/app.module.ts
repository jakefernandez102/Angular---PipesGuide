import { registerLocaleData } from '@angular/common';
import localBR from '@angular/common/locales/br';
import localES from '@angular/common/locales/es-CR';
import localFR from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


//Cambiar el locale de la app
registerLocaleData( localES );
registerLocaleData( localFR );
registerLocaleData( localBR );

@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    VentasModule,
    SharedModule,
    AppRouterModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CR' }
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
