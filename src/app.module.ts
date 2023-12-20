import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './modules/blog/blog.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/blogDB'),
    BlogModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
