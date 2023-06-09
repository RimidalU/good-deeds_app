import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DeedModule } from './deed/deed.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://rimidalu:${process.env.POSTGRES_PASSWORD}@cluster0.tdpnjmp.mongodb.net/?retryWrites=true&w=majority`,
    ),
    DeedModule,
    UserModule,
    AuthModule,
    TokenModule,
  ],
})
export class AppModule {}
