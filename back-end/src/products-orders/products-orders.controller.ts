import { Body, Controller, Get, Post} from '@nestjs/common';
import { ProductsOrdersService } from './products-orders.service';
import { CreateProductOrderDto } from './dtos/create-product-order.dto';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { ProductOrderDto } from './dtos/product-order.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Product orders management")
@Controller('products-orders')
export class ProductsOrdersController {
    constructor(private ProductOrderService: ProductsOrdersService) {}
    
    @ApiOperation({ summary : "Order product creation"})
    @ApiCreatedResponse({
        description: 'Order created',
        type: ProductOrderDto
    })
    @ApiBadRequestResponse({description: 'Not enough stock/not enouge money'})
    @Post()
    // @Serialize(ProductOrderDto)
    createProductOrder(@Body() body:CreateProductOrderDto,@CurrentUser() user:User) {
        return this.ProductOrderService.create(body,user);
    }

    @ApiOperation({ summary : "Get orders of current user"})
    @ApiCreatedResponse({
        description: 'Orders list',
        type: [ProductOrderDto]
    })
    @Get()
    async getProductOrders(@CurrentUser() user:User) {
        return await this.ProductOrderService.findAllById(user)
    }
}
