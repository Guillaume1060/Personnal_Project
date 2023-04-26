import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConcertOrdersService } from './concert-orders.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { ConcertOrderDto } from './dtos/concert-order.dto';
import { CreateConcertOrderDto } from './dtos/create-concert-order.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Concert Ticket orders management")
@Controller('concert-orders')
export class ConcertOrdersControllerr {
    constructor(private ConcertOrderService: ConcertOrdersService) {}
    
    @ApiOperation({ summary : "ConcertTicket Order creation"})
    @ApiCreatedResponse({
        description: 'ConcertTicket Order created',
        type: ConcertOrderDto
    })
    @ApiBadRequestResponse({description: 'Not enough stock/not enouge money'})
    @Post()
    // @Serialize(ConcertOrderDto)
    createConcertOrder(@Body() body:CreateConcertOrderDto,@CurrentUser() user:User) {
        return this.ConcertOrderService.create(body,user);
    }

    @ApiOperation({ summary : "Get ConcertTicket orders of current user"})
    @ApiCreatedResponse({
        description: 'Orders list',
        type: [ConcertOrderDto]
    })
    @Get()
    async getConcertOrders(@CurrentUser() user:User) {
        return await this.ConcertOrderService.findAllById(user)
    }
}
