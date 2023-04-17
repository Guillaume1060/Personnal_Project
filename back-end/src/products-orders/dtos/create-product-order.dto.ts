import {IsDefined, IsPositive } from 'class-validator'

export class CreateProductOrderDto {
    @IsPositive()
    @IsDefined()
    quantity: number;
        
    products: any;
}