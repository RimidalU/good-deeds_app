import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { IsArray, IsString } from 'class-validator';
import mongoose, { ObjectId } from 'mongoose';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly nickName?: string;

  // @IsString()
  // @IsOptional()
  // readonly email?: string;

  @IsString()
  @IsOptional()
  readonly password?: string;

  @IsArray()
  @Type(() => mongoose.Schema.Types.ObjectId)
  @IsOptional()
  readonly deeps?: ObjectId[];

  @IsArray()
  @Type(() => mongoose.Schema.Types.ObjectId)
  readonly frends?: ObjectId[];
}
