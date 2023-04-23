import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create.user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { User } from 'src/user/schemas/user.schema';
import { AppError } from 'src/common/constants/errors';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private userService: UserService,
  ) {}

  async signup(dto: CreateUserDto): Promise<CreateUserDto> {
    const existUser = await this.userService.searchUniqueUser(dto.email);
    if (existUser) throw new BadRequestException(AppError.USER_EXIST);

    return this.userService.create(dto);
  }

  async login(dto: LoginUserDto): Promise<User> {
    const existUser = await this.userService.searchUniqueUser(dto.email);
    if (!existUser) throw new BadRequestException(AppError.USER_NOT_EXIST);
    const isValidatePassword = await bcrypt.compare(
      dto.password,
      existUser.password,
    );
    if (!isValidatePassword)
      throw new BadRequestException(AppError.USER_NOT_EXIST);
    return existUser;
  }
}
