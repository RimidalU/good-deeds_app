import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/schemas/user.schema';
import { Deed } from './schemas/deed.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateDeedDto } from './dto/create.deed.dto';
import { UpdateDeedDto } from './dto/update.deed.dto';

@Injectable()
export class DeedService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    @InjectModel(Deed.name)
    private deedModel: Model<Deed>,
  ) {}

  async getOne(id: ObjectId): Promise<Deed> {
    const deed = await this.deedModel.findById(id);
    return deed;
  }

  async create(dto: CreateDeedDto): Promise<Deed> {
    const deed = await this.deedModel.create({ ...dto, status: 'pending' });
    return deed;
  }
  async update(id: ObjectId, dto: UpdateDeedDto) {
    const newDeed = await this.deedModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    return newDeed;
  }
  async remove(id: ObjectId): Promise<ObjectId> {
    const deed = await this.deedModel.findByIdAndDelete(id);
    return deed.id;
  }

  async getAllByUserId() {
    return 'getAllByUserId';
  }
}
