import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Deed } from 'src/deed/schemas/deed.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  nickName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Deed' }] })
  deeps: Deed[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  frends: User[];
}

export const UserSchema = SchemaFactory.createForClass(User);
