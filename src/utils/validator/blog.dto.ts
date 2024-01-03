import { IsNotEmpty, IsString, IsInt, Min, IsDate } from 'class-validator';

export class RegistroDto {
  @IsNotEmpty({ message: 'title is required' })
  @IsString({ message: 'title must be String' })
  title: string;

  @IsNotEmpty({ message: 'author is required' })
  @IsString({ message: 'author must be String' })
  author: string;

  @IsNotEmpty({ message: 'content is required' })
  @IsString({ message: 'content must be String' })
  content: string;

  @IsNotEmpty({ message: 'date is required' })
  @IsDate({ message: 'Invalid date format' })
  date: Date;
}