import * as bcrypt from 'bcrypt';

import { BadRequestException, Injectable } from '@nestjs/common';

import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create.user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { AppError } from 'src/common/constants/errors';
import { TokenService } from 'src/token/token.service';
import { AuthUserResponse } from './response';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
  ) {}

  async signup(dto: CreateUserDto): Promise<CreateUserDto> {
    const existUser = await this.userService.searchUniqueUser(dto.email);
    if (existUser) throw new BadRequestException(AppError.USER_EXIST);

    return await this.userService.create(dto);
  }

  async login(dto: LoginUserDto): Promise<AuthUserResponse> {
    const existUser = await this.userService.searchUniqueUser(dto.email);
    if (!existUser) {
      throw new BadRequestException(AppError.USER_NOT_EXIST);
    }
    const isValidatePassword = await bcrypt.compare(
      dto.password,
      existUser.password,
    );
    if (!isValidatePassword) {
      throw new BadRequestException(AppError.USER_NOT_EXIST);
    }

    const user = await this.userService.publicUser(dto.email);

    const userInfo = {
      id: user.id,
      nickName: user.nickName,
      email: user.email,
    };
    const token = await this.tokenService.generateJwtToken(userInfo);

    return { ...user, token };
  }
}
