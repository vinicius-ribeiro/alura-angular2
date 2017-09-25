import { Component }     from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    
    foto: FotoComponent = new FotoComponent();  
    http: Http;
    meuForm: FormGroup;
    
    constructor(http: Http, fb: FormBuilder) {
        this.http    = http;
        //PARA VALIDACAO
        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }
    
    cadastrar (event) {
        event.preventDefault(); //não atualiza a página       
        let headers = new Headers(); //cabeçalho http
        headers.append('Content-Type', 'application/json'); //adiciona ao reader
        
        //ENVIA VIA POST O OBJETO CONVERTIDO EM JSON
        //E PASSA O CABEÇALHO HTTP CONFIGURADO
        //APOS O RETORNO MOSTRA A MENSAGEM
        this.http.post('v1/fotos', JSON.stringify(this.foto), {headers: headers})
        .subscribe(() => {
            this.foto = new FotoComponent(); //instancia um novo componente para limpar os campos 
            console.log("Foto salva com sucesso!")
        }, erro => console.log(erro));
    }

}