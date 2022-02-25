import { Injectable, Inject, NotFoundException, HttpException, HttpStatus } from "@nestjs/common";
import { Mock } from "src/domain/mock";
import { IMockRepository } from "src/domain/repository/mock.repository";
import { MockRepository } from "src/repository/implentacoes/mock.repository";
import { ExcecaoDeNegocio } from "../common/erro/excecao-negocio";
import { MockRequest } from "./request/mock.request";
import { MockResponse } from "./response/mock.response";

@Injectable()
export class MockService {
    constructor(
        @Inject(MockRepository)
        private repositorio: IMockRepository
    ) {}

    async incluir(input: MockRequest) {
        var mockCadastrado = await this.repositorio.pesquisarPorUrl(input.url);        
        if (!!mockCadastrado) {
            throw new ExcecaoDeNegocio('URL já cadastrada.');
        }

        var registro = new Mock(null, input.url, input.httpStatus, input.contentType, input.charset, input.headers, input.body);
        this.repositorio.incluir(registro);
    }

    async alterar(id: string, input: MockRequest) {
        var mockCadastrado = await this.repositorio.pesquisarPorUrlDiferenteDoId(input.url, id);
        if (!!mockCadastrado) {
            throw new ExcecaoDeNegocio('URL já cadastrada.');
        }

        var registro = await this.repositorio.pesquisar(id);
        //registro.login = input.login;
        //registro.senha = input.senha;

        this.repositorio.alterar(registro);
    }

    async pesquisar(id: string): Promise<MockResponse> {
        return MockResponse.convert(await this.repositorio.pesquisar(id));
    }

    async pesquisarPorUrl(url: string): Promise<MockResponse> {
        return MockResponse.convert(await this.repositorio.pesquisarPorUrl(url));
    }

    async remover(id: string) {
        this.repositorio.remover(id);
    }

    async listar(): Promise<MockResponse[]> {
        return MockResponse.convertList(await this.repositorio.listar());
    }
}