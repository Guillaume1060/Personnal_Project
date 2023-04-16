import { ProductsOrder } from 'src/products-orders/product-orders.entity';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany} from 'typeorm'

@Entity('products') 
export class Product {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({default:false})
    approved: boolean;

    @Column({unique:true}) 
    name: string;

    @Column()
    description: string;

    @Column()
    type: string;

    @Column() 
    price: number;

    @Column() 
    stock: number;

    @Column({default:true})
    available: boolean;

    @OneToMany(()=> ProductsOrder,(productOrder)=>productOrder.products)
    productsOrders:ProductsOrder[]

    // @OneToMany(()=> Prod,(productOrder)=>productOrder.user)
    // productOrders: productOrders[]
}