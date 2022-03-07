export class Requisicao {
    referer: string;
    body: string;
    headers: string;
    data: string;

    constructor(referer: string, headers: string, body: string) {        
        //this.login = ValidationDomain.notNull(login, 'Campo login é obrigatório');
        //this.senha = ValidationDomain.notNull(senha, 'Campo senha é obrigatório');
        this.referer = referer;
        this.headers = headers;
        this.body = body;
        this.data = new Date().toISOString();
    }    
}