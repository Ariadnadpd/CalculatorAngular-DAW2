import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { BotonCalculadoraComponent } from './boton-calculadora/boton-calculadora.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LimitPipe } from './limit.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    BotonCalculadoraComponent,
    NavbarComponent,
    FooterComponent,
    LimitPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
