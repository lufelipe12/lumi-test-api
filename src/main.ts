import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Api made for Lumi fullstack test.')
    .setDescription('Here we can find methods to interact with this api.')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('v1/docs', app, document);

  app.setGlobalPrefix('v1/');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(+configService.get('APP_PORT') || 3000);
}
bootstrap();
