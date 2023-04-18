import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConcertOrdersService } from './concert-orders.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { ConcertOrderDto } from './dtos/concert-order.dto';
import { CreateConcertOrderDto } from './dtos/create-concert-order.dto';

@Controller('concert-orders')
export class ConcertOrdersControllerr {
    constructor(private ConcertOrderService: ConcertOrdersService) {}
    
    @Post()
    @Serialize(ConcertOrderDto)
    createConcertOrder(@Body() body:CreateConcertOrderDto,@CurrentUser() user:User) {
        return this.ConcertOrderService.create(body,user);
    }

    @Get()
    async getConcertOrders(@CurrentUser() user:User) {
        return await this.ConcertOrderService.findAllById(user)
    }
}