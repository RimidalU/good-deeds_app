import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { ObjectId } from 'mongoose';
import { UpdateUserDto } from './dto/update.user.dto';

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

  @Put(':id')
  update(@Param('id') id: ObjectId, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
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
