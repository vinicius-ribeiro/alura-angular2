import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';

@NgModule({ //TRANSFORMA EM UM MODULO DO ANGULAR
    imports: [ BrowserModule, FotoModule ], //IMPORTA PARA RODAR NO NAVEGADOR
    declarations: [ AppComponent ], //O QUE FAZ PARTE DESSE MODULO
    bootstrap: [ AppComponent ] // QUAL COMPONENTE DEVE INICIAR?
})
export class AppModule { }