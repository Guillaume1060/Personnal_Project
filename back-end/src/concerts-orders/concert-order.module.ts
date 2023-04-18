import { Module } from '@nestjs/common';
import { ConcertOrdersService } from './concert-orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concert } from 'src/concerts/concert.entity';
import { ConcertsOrder } from './concert-orders.entity';
import { ConcertOrdersControllerr } from './concert-orders.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConcertsOrder, Concert])],
  providers: [ConcertOrdersService],
  controllers: [ConcertOrdersControllerr]
})
export class ConcertOrdersModule {}
