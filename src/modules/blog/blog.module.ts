import { Module } from '@nestjs/common';
import { BlogService } from '../../modules/blog/blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from 'src/schemas/blog.schema';
import { blogController } from './blog.controller';
@Module({
    imports: [MongooseModule.forFeature([{ name: 'Blog', schema: BlogSchema }])],
    controllers: [blogController],
    providers: [BlogService],
})
export class BlogModule {}
