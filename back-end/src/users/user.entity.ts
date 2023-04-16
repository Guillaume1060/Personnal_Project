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

    // @Column()
    @OneToMany(()=> ProductsOrder,(productOrder)=>productOrder.user)
    productsOrders: ProductsOrder[]

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