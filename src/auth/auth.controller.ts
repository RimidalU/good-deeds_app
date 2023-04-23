import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create.user.dto';
import { LoginUserDto } from './dto/login.user.dto';
import { AuthUserResponse } from './response';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signup(@Body() dto: CreateUserDto): Promise<CreateUserDto> {
    return this.authService.signup(dto);
  }

  @Post('/login')
  login(@Body() dto: LoginUserDto): Promise<AuthUserResponse> {
    return this.authService.login(dto);
  }
}
