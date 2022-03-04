import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { MockRepository } from './dynamo/implementacoes/mock.repository';
//import { UsuarioSchema } from './schema/usuario.schema';
//import { TesteRepository } from './implentacoes/teste.repository';
import { Mock } from '../domain/mock';
import { MOCK_REPOSITOTY_NAME } from '../domain/repository/mock.repository';

@Module({
  //imports: [TypeOrmModule.forFeature([UsuarioRepository])],
  //imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([UsuarioSchema, TesteRepository])],
  controllers: [],
  providers: [MockRepository],
  /*exports: [{
      useClass: UsuarioRepository,
      provide: USUARIO_REPOSITOTY_NAME,
   }],*/
   exports: [MockRepository],
})
export class RepositoryModule {}

/**
 {
      useClass: UsuarioRepository,
      provide: USUARIO_REPOSITOTY_NAME,
  }
 */