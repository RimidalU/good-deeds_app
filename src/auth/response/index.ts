import { IsString } from 'class-validator';

export class AuthUserResponse {
  @IsString()
  readonly name: string;

  @IsString()
  readonly nickName: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly token: string;
}
