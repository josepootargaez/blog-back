"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
require("dotenv").config();
const morgan = require('morgan');
async function bootstrap() {
    var _a;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const corsOptions = {
        origin: `*`,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        optionsSuccessStatus: 204,
    };
    app.use(morgan('tiny'));
    app.enableCors(corsOptions);
    const port = ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.PORT_SERVER) ? process.env.PORT_SERVER : 3000;
    await app.listen(port, "0.0.0.0");
    common_1.Logger.log(`connected to port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map