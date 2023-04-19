import { ObjectId } from 'mongoose';

export class UpdateUserDto {
  readonly name?: string;
  readonly nickName?: string;
  readonly email?: string;
  readonly password?: string;
  readonly deeps?: ObjectId[];
  readonly frends?: ObjectId[];
}
