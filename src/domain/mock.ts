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
    ativo: boolean;
    gravarRequisicao: boolean;

    constructor(id: string, endereco: string, httpStatus: number, contentType: string, charset: string, headers: string, body: string, requisicoes: Requisicao[], ativo: boolean, gravarRequisicao: boolean) {        
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
        this.ativo = ativo;
        this.gravarRequisicao = gravarRequisicao;
        
        if (this.requisicoes == null){
            this.requisicoes = [];
        }
    }
}