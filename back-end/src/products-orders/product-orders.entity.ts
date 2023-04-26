import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/products/product.entity';
import { User } from 'src/users/user.entity';
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'

@Entity('productsOrders') 
export class ProductsOrder {
    @ApiProperty({
        description : 'Id number',
        example : 12
    })
    @PrimaryGeneratedColumn() 
    id: number;

    @ApiProperty({
        description : 'Quantity',
        example : 5
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
        description : 'Product',
        example : Product
    })
    @ManyToOne(()=> Product,(product)=>product.productsOrders)
    products:Product

    @ApiProperty({
        description : 'User',
        example : User
    })
    @ManyToOne(()=> User,(user)=>user.productsOrders)
    user:User

}