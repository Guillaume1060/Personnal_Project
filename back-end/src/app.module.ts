import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { Product } from './products/product.entity';
import { ProductsModule } from './products/products.module';
import { ProductsOrder } from './products-orders/product-orders.entity';
import { ProductsOrdersModule } from './products-orders/products-orders.module';
import { ConcertsModule } from './concerts/concerts.module';
import { ConcertOrdersModule } from './concerts-orders/concert-order.module';
import { Concert } from './concerts/concert.entity';
import { ConcertsOrder } from './concerts-orders/concert-orders.entity';
import { config } from "dotenv"
config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "mssql",
      host : "localhost",
      port : 1433,
      username : 'Amine',
      // HOME
      password : 'test1234',
      database : "digital_TFE",
      
      // SCHOOL
      // password : "160280", 
      // database : "TFE",
      entities : [User, Product,ProductsOrder,Concert, ConcertsOrder], 
      autoLoadEntities : true,
      synchronize : true,
      extra : {
        validateConnection : false,
        trustServerCertificate : true
      },

    }),
  UsersModule, ProductsModule, ProductsOrdersModule,ConcertsModule,ConcertOrdersModule],
  controllers: [], 
  providers: [], 
})
export class AppModule {}
