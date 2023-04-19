import { Module } from '@nestjs/common';
import { DeedController } from './deed.controller';
import { DeedService } from './deed.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { Deed, DeedSchema } from './schemas/deed.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Deed.name, schema: DeedSchema }]),
  ],
  controllers: [DeedController],
  providers: [DeedService],
})
export class DeedModule {}
