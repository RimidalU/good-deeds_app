import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeedDocument = HydratedDocument<Deed>;

@Schema()
export class Deed {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  status: 'pending' | 'in progress' | 'done';
}

export const DeedSchema = SchemaFactory.createForClass(Deed);
