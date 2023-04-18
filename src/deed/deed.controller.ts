import { Controller, Get } from '@nestjs/common';

@Controller('/deed')
export class DeedController {
  @Get()
  getOne() {
    return 'getOne';
  }
  create() {
    return 'create';
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
