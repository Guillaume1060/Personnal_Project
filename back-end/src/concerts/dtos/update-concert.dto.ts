import { ApiProperty } from '@nestjs/swagger';
import {IsString, IsOptional, IsBoolean, MaxLength, MinLength, IsPositive, IsDateString, Matches } from 'class-validator'

export class UpdateConcertDto {
    @ApiProperty({
        description : 'Name of venue',
        example : 'Ancienne Belgique'
    })
    @IsString()
    @IsOptional()
    @MinLength(2)
    @MaxLength(50)
    venue: string;

    @ApiProperty({
        description : 'Name of support',
        example : 'Apotek'
    })
    @IsString()
    @IsOptional()
    @MinLength(2)
    @MaxLength(50)
    support: string;

    @ApiProperty({
        description : 'Name of city',
        example : 'Brussels'
    })
    @IsString()
    @IsOptional()
    @MinLength(2)
    @MaxLength(50)
    city: string;

    @ApiProperty({
        description : 'Date',
        example : '2023/08/15'
    })
    @IsDateString()
    @IsOptional()
    @Matches(/^(\d{4})\:(\d{2})\:(\d{2})$/)
    date: string;
    
    @ApiProperty({
        description : 'Price',
        example : 15
    })
    @IsPositive()
    @IsOptional()
    price: number

    
    @ApiProperty({
        description : 'OpenSales',
        default : false
    })
    @IsBoolean()
    @IsOptional()
    salesOpen: boolean;

    @ApiProperty({
        description : 'Soldout',
        default : false
    })
    @IsBoolean()
    @IsOptional()
    soldout: boolean;

    @ApiProperty({
        description : 'StockTickets',
        example : 15
    })
    @IsPositive()
    @IsOptional()
    stockTickets: number
}