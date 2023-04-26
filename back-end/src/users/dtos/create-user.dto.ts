import { ApiProperty } from '@nestjs/swagger';
import {IsEmail, IsString, IsDefined, MaxLength, MinLength, IsStrongPassword } from 'class-validator'

export class CreateUserDto {
    @ApiProperty({
        description : 'Name of the user',
        example : 'Guillaume'
    })
    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(50)
    name: string;

    @ApiProperty({
        description : 'Pseudo of the user',
        example : 'GuiGui'
    })
    @IsString()
    @IsDefined()
    @MinLength(2)
    @MaxLength(50)
    pseudo: string;

    @ApiProperty({
        description : 'Email of the user',
        example : 'Guillaume@gmail.com'
    })
    @IsEmail()
    @IsDefined()
    email: string;
    
    @ApiProperty({
        description : 'Password of the user',
        example : 'Test1234#'
    })
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