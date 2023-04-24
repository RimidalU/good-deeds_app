import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';

import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update.user.dto';
import { AddDeedDto } from './dto/add.deed.dto';
import { JwtAuthGuard } from 'src/guards/jwt.gvard';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/deed')
  addDeed(@Body() dto: AddDeedDto) {
    return this.userService.addDeed(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/search')
  searchUser(@Query('query') query: string) {
    return this.userService.searchUser(query);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.userService.getOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: ObjectId, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.userService.remove(id);
  }

  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.userService.getAll(count, offset);
  }
}
