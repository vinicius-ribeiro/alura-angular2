import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FotoModule }    from './foto/foto.module';
import { HttpModule }    from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotaoModule } from './botao/botao.module';
import { ModalModule } from './modal/modal.module';

@NgModule({ //TRANSFORMA EM UM MODULO DO ANGULAR
    imports: [ 
        BrowserModule, 
        FotoModule, 
        HttpModule, 
        PainelModule, 
        routing, FormsModule, 
        ReactiveFormsModule,
        BotaoModule,
        ModalModule
    ], //IMPORTA PARA RODAR NO NAVEGADOR
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ], //O QUE FAZ PARTE DESSE MODULO
    bootstrap:    [ AppComponent ] // QUAL COMPONENTE DEVE INICIAR?
})
export class AppModule { }