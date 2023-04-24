import { IsString } from 'class-validator';

export class userInfoDto {
  @IsString()
  readonly nickName: string;

  @IsString()
  readonly email: string;
}
