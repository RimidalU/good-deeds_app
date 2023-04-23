import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { IsArray, IsString } from 'class-validator';
import mongoose, { ObjectId } from 'mongoose';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly nickName?: string;

  @IsString()
  @IsOptional()
  readonly email?: string;

  @IsString()
  @IsOptional()
  readonly password?: string;

  @IsArray()
  @Type(() => mongoose.Schema.Types.ObjectId)
  @IsOptional()
  readonly deeps?: mongoose.Schema.Types.ObjectId[];

  @IsArray()
  @Type(() => mongoose.Schema.Types.ObjectId)
  readonly frends?: mongoose.Schema.Types.ObjectId[];
}
