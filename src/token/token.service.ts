import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// import { Deed } from 'src/deed/schemas/deed.schema';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
}
