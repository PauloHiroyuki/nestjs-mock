import { Controller, Get, Post, Body, Put, Param, Delete, Res, Patch } from "@nestjs/common";
import { Response } from "express";
import { MockService } from "src/service/mock.service";

@Controller('')
export class ExecMockController {
  constructor(private mockService: MockService){}

  @Post('*')
  async incluir(@Body() registro: String, @Param() params, @Res() response: Response) {
    return this.executar(params, response);
  }

  @Put('*')
  async alterar(@Body() registro: String, @Param() params, @Res() response: Response) {
    return this.executar(params, response);
  }

  @Delete('*')
  async deletar(@Param() params, @Res() response: Response) {
    return this.executar(params, response);
  }

  @Get('*')
  async pesquisar(@Param() params, @Res() response: Response) {
    return this.executar(params, response);
  }

  @Patch('*')
  async patch(@Param() params, @Res() response: Response) {
    return this.executar(params, response);
  }

  async executar(params, response: Response) {
    let endereco = params[0];

    let mock = await this.mockService.pesquisarPorEndereco(endereco);
    if (mock == null) {
      return response
        .status(404)
        .send('Não foi entrado mock para esta endereco "' + endereco + '"');
    }
    let header = JSON.parse(mock.headers);

    return response
      .status(mock.httpStatus)
      .contentType(mock.contentType)
      .header(header)
      .send(mock.body);
  }
}