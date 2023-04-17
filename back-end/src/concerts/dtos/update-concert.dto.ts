import {IsString, IsOptional, IsBoolean, MaxLength, MinLength, IsPositive, IsDateString, Matches, IsDefined } from 'class-validator'

export class UpdateConcertDto {
    @IsString()
    @IsOptional()
    @MinLength(2)
    @MaxLength(50)
    venue: string;

    @IsString()
    @IsOptional()
    @MinLength(2)
    @MaxLength(50)
    support: string;

    @IsString()
    @IsOptional()
    @MinLength(2)
    @MaxLength(50)
    city: string;

    @IsDateString()
    @IsOptional()
    @Matches(/^(\d{4})\:(\d{2})\:(\d{2})$/)
    date: string;
    
    @IsPositive()
    @IsOptional()
    price: number

    @IsBoolean()
    @IsOptional()
    salesOpen: boolean;

    @IsBoolean()
    @IsOptional()
    soldout: boolean;

    @IsPositive()
    @IsOptional()
    stockTickets: number
}