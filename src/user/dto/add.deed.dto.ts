import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import mongoose, { ObjectId } from 'mongoose';

export class AddDeedDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description?: string;

  @IsString()
  readonly status = 'pending';

  @Type(() => mongoose.Schema.Types.ObjectId)
  readonly userId: ObjectId;
}
