import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ErrorExcept } from 'src/exceptions/enums/enumExceptions';
import { Blog } from 'src/models/blog.model';
import { response } from 'src/models/response.mode';
@Injectable()
export class BlogService {
  constructor(@InjectModel('Blog') private readonly BlogModel: Model<Blog>) {}
    async findAll() {
        try {
          const data = await this.BlogModel.find().exec();
          const obj:response={
            succes:true,
            status:HttpStatus.OK,
            data,
          }
          return obj
        } catch (error) {
          Logger.error(error.message,error)
          throw new HttpException({
            status:HttpStatus.BAD_REQUEST,
            error:error.message,
            message:error.message
          }, HttpStatus.BAD_REQUEST,
          )
        }
      }
      async create(createCatDto:Blog ): Promise<response> {

        try {
          const createdBlog = new this.BlogModel(createCatDto);
          const result:Blog = await createdBlog.save();
          const obj:response={
            succes:true,
            status:HttpStatus.CREATED,
            data:result,
          }
          return obj
        } catch (error) {
          let status = HttpStatus.INTERNAL_SERVER_ERROR;
          let errorText = ErrorExcept.Iternal_Server;
          if(error?.message && error.message.includes("validation")){
            status = HttpStatus.UNPROCESSABLE_ENTITY;
            errorText =ErrorExcept.Validations;
          }
          Logger.error(error.message,error)
          throw new HttpException({
            status,
            error:errorText,
            message:error.message
          }, status
          )
        }
        
      }
}
