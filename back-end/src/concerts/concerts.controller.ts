import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AdminGuard } from 'src/_guards/admin.guard';
import { ConcertsService } from './concerts.service';
import { CreateConcertDto } from './dtos/create-concert.dto';
import { UpdateConcertDto } from './dtos/update-concert.dto';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Concert } from './concert.entity';

@ApiTags("Concert management")
@Controller('concerts')
export class ConcertsController {
    constructor(private concertService: ConcertsService){}

    @Post()
    @ApiOperation({ summary : "Creation of concert"})
    @ApiCreatedResponse({
        description: 'Concert created',
        type: Concert
    })
    createConcert(@Body() body:CreateConcertDto) {
        return this.concertService.create(body)
    }

    @ApiOperation({ summary : "Approvement of concert (AdminGuard)"})
    @Patch('openSales/:id')
    @ApiCreatedResponse({
        description: 'Approved Concert',
        type: Concert
    })
    @UseGuards(AdminGuard)
    approveConcert(@Param('id') id:string) {
        return this.concertService.openSale(id)
    }

    @ApiOperation({ summary : "Get all concerts"})
    @Get()
    @ApiCreatedResponse({
        description: 'List of concerts',
        type: [Concert]
    })
    getAllConcerts() {
        return this.concertService.getAll()
    }

    @ApiOperation({ summary : "Update of concert (AdminGuard)"})
    @Patch('/:id')
    @ApiCreatedResponse({
        description: 'Updated concert',
        type: Concert
    })
    @UseGuards(AdminGuard)
    updateConcert(@Param('id') id:string, @Body() body:UpdateConcertDto){
        return this.concertService.update(+id,body) 
    }

    @ApiOperation({ summary : "Close sales (AdminGuard)"})
    @Patch('closeSales/:id')
    @UseGuards(AdminGuard)
    @ApiCreatedResponse({
        description: 'Make the sales unavailable',
        type: Concert
    })
    removeConcert(@Param('id') id:string){
        return this.concertService.remove(+id) 
    }
}
