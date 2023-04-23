import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { Deed, DeedSchema } from 'src/deed/schemas/deed.schema';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { TokenService } from './token.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    // MongooseModule.forFeature([{ name: Deed.name, schema: DeedSchema }]),
  ],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokeModule {}
