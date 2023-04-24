import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model, ObjectId } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { Deed } from 'src/deed/schemas/deed.schema';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { AddDeedDto } from './dto/add.deed.dto';
import { PublicUserResponse } from './response';

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
    const newUserData = {
      ...dto,
      deeps: [],
      frends: [],
      password: await this.hashPassword(dto.password),
    };

    const user = await this.userModel.create(newUserData);
    return user;
  }

  async update(id: ObjectId, dto: UpdateUserDto) {
    const newUserData = dto.password
      ? {
          ...dto,
          password: await this.hashPassword(dto.password),
        }
      : dto;

    const newUser = await this.userModel.findByIdAndUpdate(id, newUserData, {
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
    const newDeed = await this.deedModel.create({ ...dto, status: 'pending' });
    user.deeds.push(newDeed.id);
    await user.save();
    return newDeed;
  }

  async searchUser(query: string): Promise<User[]> {
    const users = await this.userModel.find({
      nickName: { $regex: new RegExp(query, 'i') },
    });
    return users;
  }

  async searchUniqueUser(email: string): Promise<User> {
    const isUserUnique = await this.userModel.findOne({
      email: { $regex: new RegExp(email, 'i') },
    });

    return isUserUnique;
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async publicUser(email: string): Promise<PublicUserResponse> {
    const isUserUnique = await this.userModel.findOne({
      email: { $regex: new RegExp(email, 'i') },
    });
    const responceData = isUserUnique
      ? {
          name: isUserUnique.name,
          nickName: isUserUnique.nickName,
          deeds: isUserUnique.deeds,
          frends: isUserUnique.frends,
          email: isUserUnique.email,
        }
      : isUserUnique;

    return responceData;
  }
}
