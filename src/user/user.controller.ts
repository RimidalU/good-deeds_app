import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';

import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update.user.dto';
import { AddDeedDto } from './dto/add.deed.dto';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/deed')
  addDeed(@Body() dto: AddDeedDto) {
    return this.userService.addDeed(dto);
  }

  @Get('/search')
  searchUser(@Query('query') query: string) {
    return this.userService.searchUser(query);
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.userService.getOne(id);
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
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.userService.getAll(count, offset);
  }
}
