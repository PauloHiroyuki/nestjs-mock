import { Requisicao } from "src/domain/requisicao";
import { Mock } from "../../domain/mock";

export class RequisicaoResponse {
    referer: string;
    body: string;
    headers: string;
    data: string;

    static convert(mock: Requisicao): RequisicaoResponse {
        if (mock == null) return null;
        var registro = new RequisicaoResponse();
        registro.referer = mock.referer;
        registro.headers = mock.headers;
        registro.body = mock.body;
        registro.data = mock.data;
        return registro;
    }
    
    static convertList(lista: Requisicao[]): any {
        if (lista == null) return null;
        return lista.map(mock => this.convert(mock));
    }
}