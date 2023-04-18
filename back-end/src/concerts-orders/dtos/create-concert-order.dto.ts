import {IsDefined, IsPositive } from 'class-validator'

export class CreateConcertOrderDto {
    @IsPositive()
    @IsDefined()
    quantity: number;
    concerts: any;
}