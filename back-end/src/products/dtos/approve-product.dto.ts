import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class ApproveProductDto {
    @ApiProperty({
        description : 'True or false',
        example : true
    })
    @IsBoolean()
    approved: boolean
}