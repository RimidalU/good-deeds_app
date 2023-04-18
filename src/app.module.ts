import { Module } from '@nestjs/common';
import { DeedModule } from './deed/deed.module';

@Module({
  imports: [DeedModule],
})
export class AppModule {}
