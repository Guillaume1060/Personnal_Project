import { Product } from 'src/products/product.entity';
import { User } from 'src/users/user.entity';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany} from 'typeorm'

@Entity('productsOrders') 
export class ProductsOrder {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    quantity: number;

    @Column() 
    amount: number;

    @ManyToOne(()=> Product,(product)=>product.productsOrders)
    products:Product

    @ManyToOne(()=> User,(user)=>user.productsOrders)
    user:User

}