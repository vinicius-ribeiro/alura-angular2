import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';

@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo ], //tudo que o modulo possue
    exports: [ FotoComponent, FiltroPorTitulo ] //o que eu quero permitir que outros modulos utilizem
})
export class FotoModule {}