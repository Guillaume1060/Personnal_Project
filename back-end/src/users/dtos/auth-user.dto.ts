import { ApiProperty } from '@nestjs/swagger';
import {IsEmail, IsString, IsDefined, IsStrongPassword } from 'class-validator'

export class AuthUserDto {
    @ApiProperty({
        description : 'Email',
        example : 'Guillaume@gmail.com'
    })
    @IsEmail()
    @IsDefined()
    email: string;
    
    @ApiProperty({
        description : 'Password',
        example : 'Test1234#'
    })
    @IsString()
    @IsDefined()
    @IsStrongPassword({
        minLength : 6,
        minLowercase : 1,
        minUppercase : 1,
        minNumbers : 1,
        minSymbols : 1
    })
    password: string
}