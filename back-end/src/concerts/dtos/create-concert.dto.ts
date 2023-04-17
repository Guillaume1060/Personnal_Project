
import {IsString, IsOptional, IsDefined, IsBoolean, MaxLength, MinLength, IsPositive, IsDateString, Matches } from 'class-validator'

export class CreateConcertDto {
    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(50)
    venue: string;

    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(50)
    support: string;

    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(50)
    city: string;

    @IsDateString()
    @IsDefined()
    // @Matches(/^(\d{4})\:(\d{2})\:(\d{2})$/)
    date: string;
    
    @IsPositive()
    @IsDefined()
    price: number

    @IsBoolean()
    @IsOptional()
    salesOpen: boolean;

    @IsBoolean()
    @IsOptional()
    soldout: boolean;

    @IsPositive()
    @IsDefined()
    stockTickets: number
}