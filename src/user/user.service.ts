import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model, ObjectId } from 'mongoose';
import { Deed } from 'src/deed/schemas/deed.schema';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { AddDeedDto } from './dto/add.deed.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Deed.name) private deedModel: Model<Deed>,
  ) {}

  async getOne(id: ObjectId): Promise<User> {
    const user = await this.userModel
      .findById(id)
      .populate(['deeds', 'frends']);
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

  async getAll(count = 10, offset = 0): Promise<User[]> {
    const users = await this.userModel.find().skip(offset).limit(count);
    return users;
  }

  async addDeed(dto: AddDeedDto) {
    const user = await this.userModel.findById(dto.userId);
    const newDeed = await this.deedModel.create({ ...dto });
    user.deeds.push(newDeed._id);
    await user.save();
    return newDeed;
  }

  async searchUser(query: string): Promise<User[]> {
    const users = await this.userModel.find({
      nickName: { $regex: new RegExp(query) },
    });
    return users;
  }
}
