import { ApiProperty } from '@nestjs/swagger';
import { ConcertsOrder } from 'src/concerts-orders/concert-orders.entity';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany} from 'typeorm'

@Entity('concerts') 
export class Concert {
    @ApiProperty({
        description : 'Id number',
        example : 7
    })
    @PrimaryGeneratedColumn() 
    id: number;

    @ApiProperty({
        description : 'Name of the venue',
        example : 'Ancienne Belgique'
    })
    @Column()
    venue: string;

    @ApiProperty({
        description : 'Name of the support',
        example : 'Apotek'
    })
    @Column() 
    support: string;

    @ApiProperty({
        description : 'CityName',
        example : 'Brussels'
    })
    @Column()
    city: string;

    @ApiProperty({
        description : 'Date',
        example : '2023/02/23'
    })
    @Column()
    date: string;

    @ApiProperty({
        description : 'Price',
        example : 15
    })
    @Column() 
    price: number;

    @ApiProperty({
        description : 'OpenSales',
        default: false
    })
    @Column({default:false}) 
    salesOpen: boolean;

    @ApiProperty({
        description : 'SoldOut',
        default : false
    })
    @Column({default:false})
        soldout: boolean;

    @ApiProperty({
        description : 'Stock Tickets',
        example : 100
        })
    @Column() 
    stockTickets: number;

    @ApiProperty({
        description : 'ConcertTicket\'s orders',
        type: ConcertsOrder
        })
    @OneToMany(()=> ConcertsOrder,(concertOrder)=>concertOrder.concerts)
    concertOrders:ConcertsOrder[]
}