import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { Product } from './products/product.entity';
import { ProductsModule } from './products/products.module';
import { ProductsOrder } from './products-orders/product-orders.entity';
import { ProductsOrdersModule } from './products-orders/products-orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "mssql",
      host : "localhost",
      port : 1433,
      username : "guillaume",
      password : "test1234", 
      database : "digital_TFE",
      entities : [User, Product,ProductsOrder], 
      autoLoadEntities : true,
      synchronize : true,
      extra : {
        validateConnection : false,
        trustServerCertificate : true
      },
      // logging : "all"
    }),
    UsersModule, ProductsModule, ProductsOrdersModule],
  controllers: [], 
  providers: [], 
})
export class AppModule {}
