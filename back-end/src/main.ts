import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const cookieSession = require('cookie-session')


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // autorise toutes les sources d'accès
    methods: 'GET,POST,PUT,DELETE', // autorise les méthodes HTTP
    allowedHeaders: 'Content-Type,Authorization', // autorise les en-têtes personnalisés
  });
  app.use(cookieSession({
    keys:['abcefzefzef']
  }))
  app.useGlobalPipes(
    new ValidationPipe()
  );
  await app.listen(5000);
}
bootstrap();
