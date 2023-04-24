import { IsString } from 'class-validator';

export class PublicUserResponse {
  @IsString()
  readonly name: string;

  @IsString()
  readonly nickName: string;

  @IsString()
  readonly email: string;
}
