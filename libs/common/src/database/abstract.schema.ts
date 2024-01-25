import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class AbstractDocument {
  @Prop({ type: Date, default: Date.now })
  _id: Types.ObjectId;
}
