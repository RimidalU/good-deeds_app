import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/schemas/user.schema';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create.user.dto';
import { AppError } from 'src/common/errors';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private userService: UserService,
  ) {}

  async registerUser(dto: CreateUserDto): Promise<CreateUserDto> {
    const isExistUser = await this.userService.searchUniqueUser(dto.email);
    if (isExistUser) throw new BadRequestException(AppError.USER_EXIST);

    return 
  }
}
