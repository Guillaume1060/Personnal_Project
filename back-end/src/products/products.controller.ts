import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService){}

    @Post()
    createProduct(@Body() body:CreateProductDto) {
        return this.productService.create(body)
    }

    @Get()
    getAllProducts() {
        console.log('coucou');

        return this.productService.getAll()
    }

}
