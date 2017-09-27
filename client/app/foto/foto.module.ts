import { NgModule }         from '@angular/core';
import { FotoComponent }    from './foto.component';
import { FiltroPorTitulo }  from './foto.pipes';
import { FotoService }      from './foto.service';

@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo ], //tudo que o modulo possue
    exports: [ FotoComponent, FiltroPorTitulo ], //o que eu quero permitir que outros modulos utilizem
    providers: [ FotoService ]
})
export class FotoModule {}