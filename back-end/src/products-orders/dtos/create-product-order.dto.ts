import {IsDefined, IsPositive } from 'class-validator'

export class CreateProductOrderDto {
    @IsPositive()
    @IsDefined()
    quantity: number;
    
    @IsPositive()
    @IsDefined()
    amount: number
    
    products: any;
}