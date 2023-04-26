import { ApiProperty } from "@nestjs/swagger";
import { Expose, Transform } from "class-transformer";

export class ProductOrderDto {
    @ApiProperty({
        description : 'ID of the product order',
        example : 17
    })
    @Expose()
    id: number
    
    @ApiProperty({
        description : 'Quantity',
        example : 5
    })
    @Expose()
    quantity: number;
    
    @ApiProperty({
        description : 'Amount',
        example : 99
    })
    @Expose()
    amount: number
    @Transform(({ obj })=>obj.user.id)
    
    @ApiProperty({
        description : 'User ID',
        example : 1
    })
    @Expose()
    userId: number;
}