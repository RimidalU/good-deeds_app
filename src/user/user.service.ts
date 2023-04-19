import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { Deed } from 'src/deed/schemas/deed.schema';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Deed.name) private deedModel: Model<Deed>,
  ) {}

  async getOne() {
    return 'getOne';
  }

  async create(dto: CreateUserDto): Promise<User> {
    const User = await this.userModel.create({ ...dto, deeps: [], frends: [] });
    return User;
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
