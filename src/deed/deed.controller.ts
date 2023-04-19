import { Body, Controller, Get, Post } from '@nestjs/common';
import { DeedService } from './deed.service';
import { CreateDeedDto } from './dto/create.deed.dto';

@Controller('/deed')
export class DeedController {
  constructor(private deedService: DeedService) {}

  @Get()
  getOne() {
    return 'getOne';
  }

  @Post()
  create(
    @Body()
    dto: CreateDeedDto,
  ) {
    return this.deedService.create(dto);
  }
  update() {
    return 'update';
  }
  remove() {
    return 'remove';
  }

  getAllByUserId() {
    return 'getAllByUserId';
  }
}
