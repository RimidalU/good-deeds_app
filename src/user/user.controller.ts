import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getOne() {
    return 'getOne';
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  update() {
    return 'update';
  }
  remove() {
    return 'remove';
  }

  getAll() {
    return 'getAll';
  }
}
