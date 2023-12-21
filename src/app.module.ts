import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './modules/blog/blog.module';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    BlogModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
