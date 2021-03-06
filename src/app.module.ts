import { Module } from '@nestjs/common';

import { RepositoryModule } from './repository/repository.module';
import { ServicosModule } from './service/servicos.module';
import { ControllerModule } from './controller/controller.module';

import { APP_FILTER } from '@nestjs/core';
import { FitroDeExcecaoHttp } from './common/filter/filtro-de-excecao-http.filter';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [RepositoryModule, ServicosModule, ControllerModule, ConfigModule.forRoot({envFilePath: [`${process.env.NODE_ENV}.env`, `.env`] })],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FitroDeExcecaoHttp
    }
  ],
})
export class AppModule {}
