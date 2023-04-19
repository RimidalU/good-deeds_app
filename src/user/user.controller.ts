import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { ObjectId } from 'mongoose';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.userService.getOne(id);
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  update() {
    return 'update';
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.userService.remove(id);
  }

  @Get()
  getAll() {
    return this.userService.getAll();
  }
}
