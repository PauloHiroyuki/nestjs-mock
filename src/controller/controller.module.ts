import { Module } from '@nestjs/common';
import { MockController } from './mock.controller';
import { ServicosModule } from '../service/servicos.module';
import { ExecMockController } from './execmock.controller';

@Module({
  controllers: [MockController, ExecMockController],
  providers: [],
  exports: [],
  imports: [ServicosModule]
})
export class ControllerModule {}