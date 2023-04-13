import {IsEmail, IsString, IsOptional, IsDefined, IsBoolean, MaxLength, MinLength, IsCurrency, IsPositive } from 'class-validator'

export class CreateProductDto {
    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(50)
    name: string;

    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(100)
    description: string;

    @IsPositive()
    @IsDefined()
    price: number;
    
    @IsPositive()
    @IsDefined()
    stock: number

    @IsBoolean()
    @IsOptional()
    available: boolean;
}