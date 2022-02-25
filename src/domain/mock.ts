//import { ValidationDomain } from "../common/util/validation.model";

export class Mock {
    id: string;
    url: string;
    httpStatus: number;
    contentType: string;
    charset: string;
    headers: string;
    body: string; 


    constructor(id: string, url: string, httpStatus: number, contentType: string, charset: string, headers: string, body: string) {        
        //this.login = ValidationDomain.notNull(login, 'Campo login é obrigatório');
        //this.senha = ValidationDomain.notNull(senha, 'Campo senha é obrigatório');
        this.id = id;
        this.url = url;
        this.httpStatus = httpStatus;
        this.contentType = contentType;
        this.charset = charset;
        this.headers = headers;
        this.body = body;
    }
}