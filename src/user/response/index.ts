import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import mongoose, { ObjectId } from 'mongoose';

export class PublicUserResponse {
  @Type(() => mongoose.Schema.Types.ObjectId)
  readonly id: ObjectId;

  @IsString()
  readonly name: string;

  @IsString()
  readonly nickName: string;

  @IsString()
  readonly email: string;
}
