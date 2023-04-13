import { Module } from '@nestjs/common';
import { ProductsController } from 'src/products/products.controller';


@Module({
  controllers: [ProductsController]
})
export class ConcertsModule {}
