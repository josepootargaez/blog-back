import { BlogService } from './blog.service';
import { Blog } from 'src/models/blog.model';
import { response } from 'src/models/response.mode';
export declare class blogController {
    private readonly appService;
    constructor(appService: BlogService);
    getList(): Promise<response>;
    postBlog(body: Blog): Promise<response>;
    get(): Promise<string>;
}
