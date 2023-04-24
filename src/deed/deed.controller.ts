import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { DeedService } from './deed.service';
import { CreateDeedDto } from './dto/create.deed.dto';
import { ObjectId } from 'mongoose';
import { UpdateDeedDto } from './dto/update.deed.dto';
import { JwtAuthGuard } from 'src/guards/jwt.gvard';

@Controller('/deed')
export class DeedController {
  constructor(private deedService: DeedService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.deedService.getOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateDeedDto) {
    return this.deedService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: ObjectId, @Body() dto: UpdateDeedDto) {
    return this.deedService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.deedService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  getAllByUserId() {
    return 'getAllByUserId';
  }
}
