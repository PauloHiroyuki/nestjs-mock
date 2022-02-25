import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { MockService } from "src/service/mock.service";
import { MockRequest } from "src/service/request/mock.request";

@Controller('mock')
export class MockController {
  constructor(private mockService: MockService){}

  @Post()
  async incluir(@Body() registro: MockRequest) {
    return await this.mockService.incluir(registro);
  }

  @Put(':id')
  async alterar(@Body() registro: MockRequest, @Param() params) {
    await this.mockService.alterar(params.id, registro);
  }

  @Delete(':id')
  async deletar(@Param() params) {
    return await this.mockService.remover(params.id);
  }

  @Get(':id')
  async pesquisar(@Param() params) {
    return await this.mockService.pesquisar(params.id);
  }

  @Get()
  async listar() {
    return await this.mockService.listar();
  }
}