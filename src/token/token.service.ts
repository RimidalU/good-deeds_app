import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async generateJwtToken(user: string): Promise<string> {
    const payload = { user };
    return this.jwtService.sign(payload, {
      secret: process.env.SECRET,
      expiresIn: process.env.EXPIRE_JWT,
    });
  }
}
