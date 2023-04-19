import { ObjectId } from 'mongoose';

export class AddDeedDto {
  readonly name: string;
  readonly description?: string;
  readonly status = 'pending';
  readonly userId: ObjectId;
}
