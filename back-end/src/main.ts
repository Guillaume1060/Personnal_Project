import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import cookieSession from 'cookie-session';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  app.enableCors({
    origin: 'http://localhost:3000', // autorise toutes les sources d'accès
    methods: 'GET,POST,PUT,PATCH,DELETE', // autorise les méthodes HTTP
    allowedHeaders: 'Content-Type,Authorization', // autorise les en-têtes personnalisés
    credentials: true
  });
  app.use(cookieSession({
    keys:[process.env.COOKIES]
  }));
  app.useGlobalPipes(
    new ValidationPipe()
  );
  const configSwagger = new DocumentBuilder()
  .setTitle("Api TFE")
  .setDescription("Admin management of the API")
  .setVersion("0.0.1")
  .addCookieAuth('session', {
    type: 'http',
    scheme: 'bearer',
  })
  .build()

  const pageSwagger = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup("admin", app, pageSwagger)

  await app.listen(process.env.PORT);
}
bootstrap();
