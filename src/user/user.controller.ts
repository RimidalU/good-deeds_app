import { Controller, Get } from '@nestjs/common';

@Controller('/user')
export class UserController {
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

  getAll() {
    return 'getAll';
  }
}
