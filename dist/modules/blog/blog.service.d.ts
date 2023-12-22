import { Model } from 'mongoose';
import { Blog } from 'src/models/blog.model';
import { response } from 'src/models/response.mode';
export declare class BlogService {
    private readonly BlogModel;
    constructor(BlogModel: Model<Blog>);
    findAll(): Promise<response>;
    create(createCatDto: Blog): Promise<response>;
}
