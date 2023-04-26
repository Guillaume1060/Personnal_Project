
import { ApiProperty } from '@nestjs/swagger';
import { Concert } from 'src/concerts/concert.entity';
import { User } from 'src/users/user.entity';
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'

@Entity('concertsOrders') 
export class ConcertsOrder {
    @ApiProperty({
        description : 'Id number',
        example : 366
    })
    @PrimaryGeneratedColumn() 
    id: number;

    @ApiProperty({
        description : 'Quantity',
        example : 3
    })
    @Column() 
    quantity: number;

    @ApiProperty({
        description : 'Amount',
        example : 75
    })
    @Column() 
    amount: number;

    @ApiProperty({
        description : 'Concert',
        example : Concert
    })
    @ManyToOne(()=> Concert,(concert)=>concert.concertOrders)
    concerts:Concert

    @ApiProperty({
        description : 'User',
        example : User
    })
    @ManyToOne(()=> User,(user)=>user.concertsOrders)
    user:User
}