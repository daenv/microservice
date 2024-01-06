import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
   @Prop()
   username: string;
   @Prop()
   password: string;
   @Prop()
   email: string;
   @Prop()
   firstName: string;
   @Prop()
   lastName: string;
   @Prop()
   isActive: boolean;
   @Prop()
   timestamp: Date;
}
export const UserSchema = SchemaFactory.createForClass(UserDocument);
