import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model, ObjectId } from 'mongoose';
import { Deed } from 'src/deed/schemas/deed.schema';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Deed.name) private deedModel: Model<Deed>,
  ) {}

  async getOne(id: ObjectId): Promise<User> {
    const user = await this.userModel.findById(id);
    return user;
  }

  async create(dto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create({ ...dto, deeps: [], frends: [] });
    return user;
  }

  async update(id: ObjectId, dto: UpdateUserDto) {
    const newUser = await this.userModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    return newUser;
  }

  async remove(id: ObjectId): Promise<ObjectId> {
    const user = await this.userModel.findByIdAndDelete(id);
    return user.id;
  }

  async getAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
}
