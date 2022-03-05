import { Module } from '@nestjs/common';
import { MockService } from './mock.service';
import { RepositoryModule } from '../repository/repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [],
  providers: [MockService],
  exports: [MockService],
})
export class ServicosModule {}