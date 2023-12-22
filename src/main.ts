import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { Logger } from '@nestjs/common';
require("dotenv").config();
const morgan = require('morgan')
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: `*`,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  app.use(morgan('tiny'))
  app.enableCors(corsOptions);
  const port = process?.env?.PORT_SERVER ? process.env.PORT_SERVER : 3000
  await app.listen(port,"0.0.0.0");
  Logger.log(`connected to port ${port}`)
}
bootstrap();
