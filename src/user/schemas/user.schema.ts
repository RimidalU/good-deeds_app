import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';

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
  deeds: Types.ObjectId[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  frends: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
