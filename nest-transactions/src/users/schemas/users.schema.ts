import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User extends Document{

  @Prop()
  username: string;

  @Prop()
  hashedPassword: string;

  @Prop()
  name: string;

}

export const UserSchema = SchemaFactory.createForClass(User);