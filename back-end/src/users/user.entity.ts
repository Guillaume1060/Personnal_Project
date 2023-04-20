import { ConcertsOrder } from 'src/concerts-orders/concert-orders.entity';
import { ProductsOrder } from 'src/products-orders/product-orders.entity';
import {Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove, OneToMany} from 'typeorm'

@Entity('users') 
export class User {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    name: string;

    @Column()
    // @Exclude()
    pseudo: string;

    @Column({unique:true}) 
    email: string;

    @Column() 
    password: string;

    @Column({default:false})
    // @Exclude()
    banish: boolean;

    @Column({default:true})
    admin: boolean;

    @Column({default:100})
    money: number;

    @OneToMany(()=> ProductsOrder,(productOrder)=>productOrder.user)
    productsOrders: ProductsOrder[]

    @OneToMany(()=> ConcertsOrder,(concertOrder)=>concertOrder.user)
    concertsOrders: ConcertsOrder[]


    @AfterInsert()
    logInser () {
        console.log('Inserted user with id', this.id);
    }
    @AfterUpdate()
    logUpdate () {
        console.log('Updated user with id', this.id);
    }
    @AfterRemove()
    logRemove () {
        console.log('Remove user with id', this.id);
    }
}