import mongoose from "mongoose";
import { HydratedDocument } from 'mongoose';
export type BlogDocument = HydratedDocument<Blog>;
export declare class Blog {
    title: string;
    author: string;
    content: string;
    date: string;
}
export declare const BlogSchema: mongoose.Schema<Blog, mongoose.Model<Blog, any, any, any, mongoose.Document<unknown, any, Blog> & Blog & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Blog, mongoose.Document<unknown, {}, mongoose.FlatRecord<Blog>> & mongoose.FlatRecord<Blog> & {
    _id: mongoose.Types.ObjectId;
}>;
