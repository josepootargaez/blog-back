import { Module } from '@nestjs/common';
import { BlogModule } from './modules/blog/blog.module';
import {DatabaseService} from './database/database.service';
require("dotenv").config();
@Module({
  imports: [
    BlogModule
  ],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
