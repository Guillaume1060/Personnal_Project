import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AdminGuard } from 'src/_guards/admin.guard';
import { ConcertsService } from './concerts.service';
import { CreateConcertDto } from './dtos/create-concert.dto';
import { UpdateConcertDto } from './dtos/update-concert.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Gestion des concerts")
@Controller('concerts')
export class ConcertsController {
    constructor(private concertService: ConcertsService){}

    @Post()
    createConcert(@Body() body:CreateConcertDto) {
        return this.concertService.create(body)
    }

    @Patch('openSales/:id')
    @UseGuards(AdminGuard)
    approveConcert(@Param('id') id:string) {
        return this.concertService.openSale(id)
    }

    @Get()
    getAllConcerts() {
        return this.concertService.getAll()
    }

    @Patch('/:id')
    updateConcert(@Param('id') id:string, @Body() body:UpdateConcertDto){
        return this.concertService.update(+id,body) 
    }

    @Patch('closeSales/:id')
    removeConcert(@Param('id') id:string){
        return this.concertService.remove(+id) 
    }
}
