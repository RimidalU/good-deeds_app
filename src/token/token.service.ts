import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userInfoDto } from './dto/user.info.dto';

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}

  async generateJwtToken(payload: userInfoDto): Promise<string> {
    return this.jwtService.sign(payload, {
      secret: process.env.SECRET,
      expiresIn: process.env.EXPIRE_JWT,
    });
  }
}
