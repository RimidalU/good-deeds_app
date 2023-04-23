import { IsOptional, IsString } from 'class-validator';

export class UpdateDeedDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsString()
  @IsOptional()
  readonly status?: 'pending' | 'in progress' | 'done';
}
