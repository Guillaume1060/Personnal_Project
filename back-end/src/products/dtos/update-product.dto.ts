import { ApiProperty } from '@nestjs/swagger';
import {IsString, IsOptional, IsBoolean, MaxLength, MinLength, IsPositive } from 'class-validator'

export class UpdateProductDto {
    @ApiProperty({
        description : 'Name of product',
        example : 'Album CD'
    })
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    @IsOptional()
    name: string;

    @ApiProperty({
        description : 'Description of the product',
        example : 'Album CD'
    })
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @IsOptional()
    description: string;

    @ApiProperty({
        description : 'Price',
        example : 5.99
    })
    @IsPositive()
    @IsOptional()
    price: number;
    
    @ApiProperty({
        description : 'Stock',
        example : 5
    })
    @IsPositive()
    @IsOptional()
    stock: number

    @ApiProperty({
        description : 'Available',
        example : false
    })
    @IsBoolean()
    @IsOptional()
    available: boolean;
}