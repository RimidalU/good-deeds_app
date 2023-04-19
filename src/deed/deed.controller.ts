import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeedService } from './deed.service';
import { CreateDeedDto } from './dto/create.deed.dto';
import { ObjectId } from 'mongoose';
import { UpdateDeedDto } from './dto/update.deed.dto';

@Controller('/deed')
export class DeedController {
  constructor(private deedService: DeedService) {}

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.deedService.getOne(id);
  }

  @Post()
  create(@Body() dto: CreateDeedDto) {
    return this.deedService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: ObjectId, @Body() dto: UpdateDeedDto) {
    return this.deedService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.deedService.remove(id);
  }

  getAllByUserId() {
    return 'getAllByUserId';
  }
}
