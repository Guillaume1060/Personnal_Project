import { Expose, Transform } from "class-transformer";

export class ProductOrderDto {
    @Expose()
    id: number
    @Expose()
    quantity: number;
    @Expose()
    amount: number
    @Transform(({ obj })=>obj.user.id)
    @Expose()
    userId: number;
}