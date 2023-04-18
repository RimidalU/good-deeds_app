import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getOne() {
    return 'getOne';
  }
  async create() {
    return 'create';
  }
  async update() {
    return 'update';
  }
  async remove() {
    return 'remove';
  }

  async getAllByUserId() {
    return 'getAll';
  }
}
