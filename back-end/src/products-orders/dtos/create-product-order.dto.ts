import { ApiProperty } from '@nestjs/swagger';
import {IsDefined, IsPositive } from 'class-validator'

export class CreateProductOrderDto {
    @ApiProperty({
        description : 'Order quantity',
        example : 5
    })
    @IsPositive()
    @IsDefined()
    quantity: number;

    @ApiProperty({
        description : 'Product ID',
        example : 2
    })
    productID: any;
}