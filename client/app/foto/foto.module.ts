import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';

@NgModule({
    declarations: [ FotoComponent ], //tudo que o modulo possue
    exports: [ FotoComponent ] //o que eu quero permitir que outros modulos utilizem
})
export class FotoModule {}