import { Module } from '@nestjs/common';
import { BlogService } from '../../modules/blog/blog.service';
import { blogController } from './blog.controller';
import {DatabaseService} from './../../database/database.service';
@Module({
    imports: [],
    controllers: [blogController],
    providers: [BlogService,DatabaseService],
})
export class BlogModule {}
