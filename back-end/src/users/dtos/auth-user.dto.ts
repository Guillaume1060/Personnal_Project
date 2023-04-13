import {IsEmail, IsString, IsDefined, IsStrongPassword } from 'class-validator'

export class AuthUserDto {
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
}