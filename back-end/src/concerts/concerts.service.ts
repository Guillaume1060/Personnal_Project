import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConcertDto } from './dtos/create-concert.dto';
import { Concert } from './concert.entity';

@Injectable()
export class ConcertsService {
    constructor(@InjectRepository(Concert) private repo : Repository<Concert>) {}

    create(concertDto : CreateConcertDto) {
        const concert = this.repo.create(concertDto)
        return this.repo.save(concert)
    }

    getAll(){
        return this.repo.find({ where: { salesOpen: true } })
    }

    async openSale(id: string) {
        const concert = await this.repo.findOne({ where: { id: parseInt(id) } });
        if (!concert) {
            throw new NotFoundException('concert not found')
        }
        concert.salesOpen = true
        return this.repo.save(concert)
    }

    async update(id:number,attrs:Partial<Concert>) {
        const concert = await this.repo.findOneBy({id});
        if (!concert) throw new NotFoundException('concert not found')
        Object.assign(concert,attrs)
        return this.repo.save(concert)
    }

    async remove(id:number) {
        const concert = await this.repo.findOneBy({id});
        if (!concert) throw new NotFoundException('concert not found')
        concert.salesOpen = false
        return this.repo.save(concert)
    }
}