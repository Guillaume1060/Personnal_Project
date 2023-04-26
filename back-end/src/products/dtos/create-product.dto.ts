import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {IsString, IsOptional, IsDefined, IsBoolean, MaxLength, MinLength,IsPositive } from 'class-validator'

export class CreateProductDto {
    @ApiProperty({
        description : 'Name of product',
        example : 'Album CD'
    })
    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(50)
    name: string;

    @ApiProperty({
        description : 'Description of the product',
        example : 'Album CD - TALES OF THE BORDERS'
    })
    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(100)
    description: string;

    @ApiProperty({
        description : 'Type of product',
        example : 'CD'
    })
    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(100)
    type: string;

    @ApiProperty({
        description : 'Price of the product',
        example : 19
    })
    @IsPositive()
    @IsDefined()
    price: number;
    
    @ApiProperty({
        description : 'Stock of the product',
        example : 50
    })
    @IsPositive()
    @IsDefined()
    stock: number

    @ApiProperty({
        description : 'Available',
        default : true
    })
    @IsBoolean()
    @IsOptional()
    available: boolean;

    @ApiProperty({
        description : 'Available',
        default : false
    })
    @Expose()
    approved: boolean
}