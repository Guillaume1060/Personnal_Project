import { ConcertsOrder } from 'src/concerts-orders/concert-orders.entity';
import { ProductsOrder } from 'src/products-orders/product-orders.entity';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany} from 'typeorm'

@Entity('concerts') 
export class Concert {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column()
    venue: string;

    @Column() 
    support: string;

    @Column()
    city: string;

    @Column()
    date: string;

    @Column() 
    price: number;

    @Column({default:false}) 
    salesOpen: boolean;

    @Column({default:false})
    soldout: boolean;

    @Column() 
    stockTickets: number;

    @OneToMany(()=> ConcertsOrder,(concertOrder)=>concertOrder.concerts)
    concertOrders:ConcertsOrder[]
}