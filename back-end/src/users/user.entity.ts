import { ApiProperty } from '@nestjs/swagger';
import { ConcertsOrder } from 'src/concerts-orders/concert-orders.entity';
import { ProductsOrder } from 'src/products-orders/product-orders.entity';
import {Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove, OneToMany} from 'typeorm'

@Entity('users') 
export class User {
    @ApiProperty({
        description : 'Id number',
        example : 366
    })
    @PrimaryGeneratedColumn() 
    id: number;

    @ApiProperty({
        description : 'Name of the user',
        example : 'Guillaume'
    })
    @Column() 
    name: string;

    @ApiProperty({
        description : 'Pseudo of the user',
        example : 'Guillaume'
    })
    @Column()
    // @Exclude()
    pseudo: string;

    @ApiProperty({
        description : 'Email of the user',
        example : 'Gui@gmail.com'
    })
    @Column({unique:true}) 
    email: string;

    @ApiProperty({
        description : 'Password of the user',
        example : '510091591dedb89b.bdcb758d38249cf2de3d1e3000f34c0e898410ca7a3f3079ca072d35c86591dc'
    })
    @Column() 
    password: string;

    @ApiProperty({
        description : 'Is User banish?',
        default: false
    })
    @Column({default:false})
    // @Exclude()
    banish: boolean;

    @ApiProperty({
        description : 'Is User Admin',
        default: false
    })
    @Column({default:false})
    admin: boolean;

    @ApiProperty({
        description : 'User account',
        default: 100
    })
    @Column({default:100})
    money: number;

    @ApiProperty({
        description : 'Product orders of the user',
        example : ProductsOrder
    })
    @OneToMany(()=> ProductsOrder,(productOrder)=>productOrder.user)
    productsOrders: ProductsOrder[]

    @ApiProperty({
        description : 'Concert orders of the user',
        example : ConcertsOrder
    })
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