import { Injectable, HttpException, HttpStatus, Logger, BadRequestException } from '@nestjs/common';
import { ErrorExcept } from 'src/exceptions/enums/enumExceptions';
import { response } from 'src/models/response.mode';
import { DatabaseService } from '../../database/database.service';
import { RegistroDto } from 'src/utils/validator/blog.dto';
import { ValidationError, validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
@Injectable()
export class BlogService {
  constructor(private readonly databaseService: DatabaseService) {}
    async findAll() {
        try {
          let  data =  await this.databaseService.query('SELECT * FROM blogPost');
          data =   data.recordset
          const obj:response={
            success:true,
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
      async create(createCatDto:RegistroDto ): Promise<response> {

        try {
          const dtoInstance = plainToClass(RegistroDto, createCatDto);
          const errors: ValidationError[] = await validate(dtoInstance, { skipMissingProperties: false });
          if (errors.length > 0) {
            const errorMessage = this.formatValidationErrors(errors);
            throw new Error(errorMessage);
          }

          const { title, author,content,date } = createCatDto;
          const queryString = 'INSERT INTO blogPost (title, author,content,date) VALUES (@titulo, @autor, @contenido, @fecha)';
          const params = [
            { name: 'titulo', value: title },
            { name: 'autor', value: author },
            { name: 'contenido', value: content },
            { name: 'fecha', value: date },
          ];
          await this.databaseService.query(queryString, params);
          
          const obj:response={
            success:true,
            status:HttpStatus.CREATED,
            data:{},
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
      private formatValidationErrors(errors: ValidationError[]): string {
        return errors
          .map(error => {
            const constraints = Object.values(error.constraints).join(', ');
            return `(${error.property} - ${constraints})`;
          })
          .join('\n ');
      }
}
