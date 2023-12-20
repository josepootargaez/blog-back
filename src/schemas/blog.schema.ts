import mongoose from "mongoose";

// export const BlogSchema = new mongoose.Schema({
//   tittle: String,
//   author: String,
//   date: String,
//   content: String,
// });
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {
  @Prop({ required: true })
  tittle: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  date: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
