import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';

@NgModule({
    declarations: [ CadastroComponent ], //tudo que o modulo possue
    exports: [ CadastroComponent ] //o que eu quero permitir que outros modulos utilizem
})
export class CadastroModule {}