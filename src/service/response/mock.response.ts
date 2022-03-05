import { Mock } from "../../domain/mock";

export class MockResponse {
    id: string;
    endereco: string;
    httpStatus: number;
    contentType: string;
    charset: string;
    headers: string;
    body: string; 

    static convert(usuario: Mock): MockResponse {
        if (usuario == null) return null;
        var registro = new MockResponse();
        registro.id = usuario.id;
        registro.endereco = usuario.endereco;
        registro.httpStatus = usuario.httpStatus;
        registro.contentType = usuario.contentType;
        registro.charset = usuario.charset;
        registro.headers = usuario.headers;
        registro.body = usuario.body; 
        return registro;
    }
    
    static convertList(lista: Mock[]): any {
        return lista.map(usuario => this.convert(usuario));
    }
}