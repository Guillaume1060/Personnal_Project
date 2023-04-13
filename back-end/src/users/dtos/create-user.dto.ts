import {IsEmail, IsString, IsOptional, IsDefined, IsBoolean, MaxLength, MinLength, IsStrongPassword } from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(50)
    name: string;

    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(50)
    pseudo: string;

    @IsEmail()
    @IsDefined()
    email: string;
    
    @IsString()
    @IsDefined()
    @IsStrongPassword({
        minLength : 8,
        minLowercase : 1,
        minUppercase : 1,
        minNumbers : 1,
        minSymbols : 1
    })
    password: string

    @IsBoolean()
    @IsOptional()
    banish: boolean;
}