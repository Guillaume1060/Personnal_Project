import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
const cookieSession = require('cookie-session')


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  app.enableCors({
    origin: 'http://localhost:3000', // autorise toutes les sources d'accès
    methods: 'GET,POST,PUT,DELETE', // autorise les méthodes HTTP
    allowedHeaders: 'Content-Type,Authorization', // autorise les en-têtes personnalisés
    credentials: true
  });
  app.use(cookieSession({
    keys:['abcefzefzef']
  }))
  app.useGlobalPipes(
    new ValidationPipe()
  );
  await app.listen(process.env.PORT);
}
bootstrap();
