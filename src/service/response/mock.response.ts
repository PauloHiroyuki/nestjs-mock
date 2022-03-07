import { Requisicao } from "src/domain/requisicao";
import { Mock } from "../../domain/mock";
import { RequisicaoResponse } from "./requisicao.response";

export class MockResponse {
    id: string;
    endereco: string;
    httpStatus: number;
    contentType: string;
    charset: string;
    headers: string;
    body: string; 
    requisicoes: RequisicaoResponse[];

    static convert(mock: Mock): MockResponse {
        if (mock == null) return null;
        var registro = new MockResponse();
        registro.id = mock.id;
        registro.endereco = mock.endereco;
        registro.httpStatus = mock.httpStatus;
        registro.contentType = mock.contentType;
        registro.charset = mock.charset;
        registro.headers = mock.headers;
        registro.body = mock.body; 
        registro.requisicoes = RequisicaoResponse.convertList(mock.requisicoes);
        return registro;
    }
    
    static convertList(lista: Mock[]): any {
        if (lista == null) return null;
        return lista.map(mock => this.convert(mock));
    }
}