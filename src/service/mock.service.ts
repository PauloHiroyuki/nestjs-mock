import { Injectable, Inject, NotFoundException, HttpException, HttpStatus } from "@nestjs/common";
import { Mock } from "src/domain/mock";
import { IMockRepository } from "src/domain/repository/mock.repository";
import { MockRepository } from "src/repository/dynamo/implementacoes/mock.repository";
import { ExcecaoDeNegocio } from "../common/erro/excecao-negocio";
import { MockRequest } from "./request/mock.request";
import { MockResponse } from "./response/mock.response";

@Injectable()
export class MockService {
    constructor(
        @Inject(MockRepository)
        private repositorio: IMockRepository
    ) {}

    async incluir(input: MockRequest): Promise<Mock> {
        let mockCadastrado = await this.repositorio.pesquisarPorEndereco(input.endereco); 
        if (!!mockCadastrado) {
            throw new ExcecaoDeNegocio('Endereço já cadastrada.');
        }

        var registro = new Mock(null, input.endereco, input.httpStatus, input.contentType, input.charset, input.headers, input.body);
        return await this.repositorio.incluir(registro);
    }

    async alterar(id: string, input: MockRequest) {
        var mockCadastrado = await this.repositorio.pesquisarPorEnderecoDiferenteDoId(input.endereco, id);
        if (!!mockCadastrado) {
            throw new ExcecaoDeNegocio('Endereço já cadastrada.');
        }

        var registro = await this.repositorio.pesquisar(id);
        registro.endereco = input.endereco;
        registro.httpStatus = input.httpStatus;
        registro.contentType = input.contentType;
        registro.charset = input.charset;
        registro.headers = input.headers;
        registro.body = input.body;

        this.repositorio.alterar(registro);
    }

    async pesquisar(id: string): Promise<MockResponse> {
        return MockResponse.convert(await this.repositorio.pesquisar(id));
    }

    async pesquisarPorEndereco(endereco: string): Promise<MockResponse> {
        return MockResponse.convert(await this.repositorio.pesquisarPorEndereco(endereco));
    }

    async remover(id: string) {
        this.repositorio.remover(id);
    }

    async listar(): Promise<MockResponse[]> {
        return MockResponse.convertList(await this.repositorio.listar());
    }
}