import { ApiProperty } from '@nestjs/swagger';
import { ProductsOrder } from 'src/products-orders/product-orders.entity';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'

@Entity('products') 
export class Product {
    @ApiProperty({
        description : 'Id number',
        example : 17
    })
    @PrimaryGeneratedColumn() 
    id: number;

    @ApiProperty({
        description : 'Sale validated',
        default : false
    })
    @Column({default:true})
    approved: boolean;

    @ApiProperty({
        description : 'Name of the product',
        example : 'Vyinyl - TALES OF THE BORDERS'
    })
    @Column({unique:true}) 
    name: string;

    @ApiProperty({
        description : 'Descriptions of the product',
        example : 'Album Vinyl TALES OF THE BORDERS'
    })
    @Column()
    description: string;

    @ApiProperty({
        description : 'Type of product',
        example : 'Vinyl'
    })
    @Column()
    type: string;

    @ApiProperty({
        description : 'Price of product',
        example : 19
    })
    @Column() 
    price: number;

    @ApiProperty({
        description : 'Stock of product',
        example : 50
    })
    @Column() 
    stock: number;

    @ApiProperty({
        description : 'Is the product available?',
        default:true
    })
    @Column({default:true})
    available: boolean;

    @ApiProperty({
        description : 'ProductTicket\'s orders',
        type: ProductsOrder
    })
    @OneToMany(()=> ProductsOrder,(productOrder)=>productOrder.products)
    productsOrders:ProductsOrder[]
}