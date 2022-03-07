//import { ValidationDomain } from "../common/util/validation.model";

import { Requisicao } from "./requisicao";

export class Mock {
    id: string;
    endereco: string;
    httpStatus: number;
    contentType: string;
    charset: string;
    headers: string;
    body: string; 
    requisicoes: Requisicao[];

    constructor(id: string, endereco: string, httpStatus: number, contentType: string, charset: string, headers: string, body: string, requisicoes: Requisicao[]) {        
        //this.login = ValidationDomain.notNull(login, 'Campo login é obrigatório');
        //this.senha = ValidationDomain.notNull(senha, 'Campo senha é obrigatório');
        this.id = id;
        this.endereco = endereco;
        this.httpStatus = httpStatus;
        this.contentType = contentType;
        this.charset = charset;
        this.headers = headers;
        this.body = body;
        this.requisicoes = requisicoes;
        
        if (this.requisicoes == null){
            this.requisicoes = [];
        }
    }
}