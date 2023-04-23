import { IsOptional, IsString } from 'class-validator';

export class CreateDeedDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsString()
  readonly status = 'pending';
}
