
import { Concert } from 'src/concerts/concert.entity';
import { User } from 'src/users/user.entity';
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'

@Entity('concertsOrders') 
export class ConcertsOrder {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    quantity: number;

    @Column() 
    amount: number;

    @ManyToOne(()=> Concert,(concert)=>concert.concertOrders)
    concerts:Concert

    @ManyToOne(()=> User,(user)=>user.concertsOrders)
    user:User
}