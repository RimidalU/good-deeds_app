import { Module } from '@nestjs/common';
import { DeedController } from './deed.controller';
import { DeedService } from './deed.service';

@Module({
  controllers: [DeedController],
  providers: [DeedService],
})
export class DeedModule {}
