import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from 'src/models/blog.model';
import { response } from 'src/models/response.mode';

@Controller({
	path: "/",
	version: "1",
})
export class blogController {
  constructor(private readonly appService: BlogService) {}

  @Get('list')
  getList() {
    return this.appService.findAll();
  }
  @Post('blog')
  async postBlog(@Body() body:Blog) : Promise<response>  {
        const result = await this.appService.create(body);
        return result
  }

  @Get('')
  async get()  {
        return "server listen"
  }
}
