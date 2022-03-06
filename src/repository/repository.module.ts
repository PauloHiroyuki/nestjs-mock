import { Module } from '@nestjs/common';
import { MockRepository } from './dynamo/implementacoes/mock.repository';
import { DynamoConfig } from './dynamo/dynamo';

@Module({
  controllers: [],
  providers: [MockRepository, DynamoConfig],
   exports: [MockRepository],
})
export class RepositoryModule {}