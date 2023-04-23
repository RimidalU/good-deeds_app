import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}

  async generateJwtToken(user: string): Promise<string> {
    const payload = { user };
    return this.jwtService.sign(payload, {
      secret: process.env.SECRET,
      expiresIn: process.env.EXPIRE_JWT,
    });
  }
}
