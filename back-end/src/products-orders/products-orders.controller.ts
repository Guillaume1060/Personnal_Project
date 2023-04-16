import { Body, Controller, Get, Param, Post, Query, Session } from '@nestjs/common';
import { ProductsOrdersService } from './products-orders.service';
import { CreateProductOrderDto } from './dtos/create-product-order.dto';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ProductOrderDto } from './dtos/product-order.dto';


@Controller('products-orders')
export class ProductsOrdersController {
    constructor(private ProductOrderService: ProductsOrdersService) {}

    @Post()
    @Serialize(ProductOrderDto)
    createProductOrder(@Body() body:CreateProductOrderDto,@CurrentUser() user:User) {
        return this.ProductOrderService.create(body,user);
    }

    @Get()
    async getProductOrders(@CurrentUser() user:User) {
        return await this.ProductOrderService.findAllById(user)
    }
}
