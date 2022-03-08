import { Controller, Get, Post, Body, Put, Param, Delete, Res, Patch, Req } from "@nestjs/common";
import { Response, Request } from "express";
import { Requisicao } from "src/domain/requisicao";
import { MockService } from "src/service/mock.service";

@Controller('')
export class ExecMockController {
  constructor(private mockService: MockService){}

  @Post('*')
  async incluir(@Body() registro: String, @Param() params, @Res() response: Response, @Req() request: Request) {
    return this.executar(params, response, request);
  }

  @Put('*')
  async alterar(@Body() registro: String, @Param() params, @Res() response: Response, @Req() request: Request) {
    return this.executar(params, response, request);
  }

  @Delete('*')
  async deletar(@Param() params, @Res() response: Response, @Req() request: Request) {
    return this.executar(params, response, request);
  }

  @Get('*')
  async pesquisar(@Param() params, @Res() response: Response, @Req() request: Request) {
    return this.executar(params, response, request);
  }

  @Patch('*')
  async patch(@Param() params, @Res() response: Response, @Req() request: Request) {
    return this.executar(params, response, request);
  }

  async executar(params, response: Response, request: Request) {
    let endereco = params[0];

    let mock = await this.mockService.pesquisarPorEndereco(endereco);
    if (mock == null) {
      return response
        .status(404)
        .send('Não foi entrado mock para esta endereco "' + endereco + '"');
    }

    if (!mock.ativo) {
      return response
        .status(422)
        .send('Mock está desativado para esta endereco "' + endereco + '"');
    }
    
    if (mock.gravarRequisicao) {
      let requisicao = new Requisicao(request.headers.referer, JSON.stringify(request.headers), JSON.stringify(request.body));
      this.mockService.adicionarRequisicao(mock.id, requisicao);
    }

    let header = JSON.parse(mock.headers);
    return response
      .status(mock.httpStatus)
      .contentType(mock.contentType)
      .header(header)
      .send(mock.body);
  }
}