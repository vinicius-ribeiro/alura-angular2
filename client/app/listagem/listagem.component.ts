import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
     //fotos: Array<Object> = [];
     fotos: Object[] = [];
     
    constructor (http: Http) {
    /* FORMA 1 DE FAZER
    let stream = http.get("v1/fotos");
    //stream.subscribe(function(res) {});
    stream.subscribe(res => {
        this.fotos = res.json();
        console.log(this.fotos);
    });*/

    //FORMA REZUMIDA (MAIS UTILIZADA)
    http
    .get('v1/fotos') //conecta no WS
    .map(res => res.json()) // CONVERTE O RETORNO PARA JSON (IMPORTAR rxjs/add/operator/map NO APP MODULE)
    .subscribe(fotos => { //SE "INSCREVE" NO RESULTADO PARA UTILIZAR O RETORNO JA COMPOSTO NO FOTOS
        this.fotos = fotos;
        console.log(fotos);
    }, erro => console.log(erro));

    }
}