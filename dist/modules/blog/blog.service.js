"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const enumExceptions_1 = require("../../exceptions/enums/enumExceptions");
let BlogService = class BlogService {
    constructor(BlogModel) {
        this.BlogModel = BlogModel;
    }
    async findAll() {
        try {
            const data = await this.BlogModel.find().exec();
            const obj = {
                success: true,
                status: common_1.HttpStatus.OK,
                data,
            };
            return obj;
        }
        catch (error) {
            common_1.Logger.error(error.message, error);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: error.message,
                message: error.message
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(createCatDto) {
        try {
            const createdBlog = new this.BlogModel(createCatDto);
            const result = await createdBlog.save();
            const obj = {
                success: true,
                status: common_1.HttpStatus.CREATED,
                data: result,
            };
            return obj;
        }
        catch (error) {
            let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            let errorText = enumExceptions_1.ErrorExcept.Iternal_Server;
            if ((error === null || error === void 0 ? void 0 : error.message) && error.message.includes("validation")) {
                status = common_1.HttpStatus.UNPROCESSABLE_ENTITY;
                errorText = enumExceptions_1.ErrorExcept.Validations;
            }
            common_1.Logger.error(error.message, error);
            throw new common_1.HttpException({
                status,
                error: errorText,
                message: error.message
            }, status);
        }
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Blog')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map