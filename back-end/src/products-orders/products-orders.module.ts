import { Module } from '@nestjs/common';
import { ProductsOrdersService } from './products-orders.service';
import { ProductsOrdersController } from './products-orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsOrder } from './product-orders.entity';
import { Product } from 'src/products/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsOrder, Product])],
  providers: [ProductsOrdersService],
  controllers: [ProductsOrdersController]
})
export class ProductsOrdersModule {}
