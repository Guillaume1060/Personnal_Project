import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concert } from './concert.entity';
import { ConcertsService } from './concerts.service';
import { ConcertsController } from './concerts.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Concert])],
  controllers: [ConcertsController],
  providers:[ConcertsService]
})
export class ConcertsModule {}
