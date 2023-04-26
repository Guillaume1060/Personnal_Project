
import { ApiProperty } from '@nestjs/swagger';
import {IsString, IsOptional, IsDefined, IsBoolean, MaxLength, MinLength, IsPositive, IsDateString, Matches } from 'class-validator'

export class CreateConcertDto {
    @ApiProperty({
        description : 'Name of venue',
        example : 'Ancienne Belgique'
    })
    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(50)
    venue: string;

    @ApiProperty({
        description : 'Name of support',
        example : 'Apotek'
    })
    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(50)
    support: string;

    @ApiProperty({
        description : 'Name of city',
        example : 'Brussels'
    })
    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(50)
    city: string;

    @ApiProperty({
        description : 'Date',
        example : '2023/08/15'
    })
    @IsDateString()
    @IsDefined()
    // @Matches(/^(\d{4})\:(\d{2})\:(\d{2})$/)
    date: string;
    
    @ApiProperty({
        description : 'Price',
        example : 15
    })
    @IsPositive()
    @IsDefined()
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
    @IsDefined()
    stockTickets: number
}