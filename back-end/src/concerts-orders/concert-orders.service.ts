import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConcertsOrder } from './concert-orders.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateConcertOrderDto } from './dtos/create-concert-order.dto';
import { Concert } from 'src/concerts/concert.entity';

@Injectable()
export class ConcertOrdersService {
    constructor(
        @InjectRepository(ConcertsOrder) private repo : Repository<ConcertsOrder>,
        @InjectRepository(Concert) private repoConcert : Repository<Concert>,
        ) {}

    async create(ConcertOrderDto : CreateConcertOrderDto, user:User) {
        const { concerts, quantity } = ConcertOrderDto;
        const concertOrder = this.repo.create(ConcertOrderDto)
        const concert = await this.repoConcert
        .createQueryBuilder('concert')
        .select(['concert.id', 'concert.price', 'concert.stockTickets'])
        .where('concert.id = :id', { id: concerts })
        .andWhere('concert.stockTickets >= :quantity', { quantity })
        .getOne();
        if (!concert) throw new UnauthorizedException('Not enough tickets in stock');
        const amount = concert.price * quantity;
        concertOrder.user = user
        concertOrder.amount = amount
        // Update stock
        await this.repoConcert.decrement({id:concerts},'stockTickets',quantity)
        const updatedStock = (await this.repoConcert.findOneBy({id:concerts})).stockTickets
        if (updatedStock<=0) {
            await this.repoConcert.update({id:concerts},{soldout:true})
        }
        return this.repo.save(concertOrder)
    }

    async findAllById(user: User) {
        let allProductOrdersByUser = await this.repo.find({ where: { user:{id:user.id} },relations: ['concerts'] })
        return allProductOrdersByUser
    }
}
