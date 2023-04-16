// to delete ?
import { Transform } from 'class-transformer';
import {IsEmail, IsString, IsOptional, IsDefined, IsBoolean, MaxLength, MinLength, IsCurrency, IsPositive } from 'class-validator'

export class GetEstimateDto {
    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(50)
    name: string;

    // le transform ci dessous passe le query de string à number
    @Transform(({value})=>parseInt(value))
    @IsPositive()
    @IsDefined()
    price: number;
    
    @Transform(({value})=>parseInt(value))
    @IsPositive()
    @IsDefined()
    stock: number
}