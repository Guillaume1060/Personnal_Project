import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthService } from './auth.service';
import { CurrentUserMiddleware } from './middlewares/current-user.middleware';
import { ProductsOrder } from 'src/products-orders/product-orders.entity';
import { ConcertsOrder } from 'src/concerts-orders/concert-orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, ProductsOrder,ConcertsOrder])],
  providers: [
    UsersService,
    AuthService,
  ],
  controllers: [UsersController],
})
export class UsersModule {
  configure(consumer:MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*')
  }
}
