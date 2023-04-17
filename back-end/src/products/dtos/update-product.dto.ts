import {IsString, IsOptional, IsBoolean, MaxLength, MinLength, IsPositive } from 'class-validator'

export class UpdateProductDto {
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    @IsOptional()
    name: string;

    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @IsOptional()
    description: string;

    @IsPositive()
    @IsOptional()
    price: number;
    
    @IsPositive()
    @IsOptional()
    stock: number

    @IsBoolean()
    @IsOptional()
    available: boolean;
}