import { Module } from '@nestjs/common';
import { MockService } from './mock.service';
import { RepositoryModule } from '../repository/repository.module';
import { MockRepository } from '../repository/implentacoes/mock.repository';

@Module({
  imports: [RepositoryModule],
  controllers: [],
  providers: [MockService],
  exports: [MockService],
})
export class ServicosModule {}