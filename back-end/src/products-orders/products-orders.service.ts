import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsOrder } from './product-orders.entity';
import { CreateProductOrderDto } from './dtos/create-product-order.dto';
import { User } from 'src/users/user.entity';
import { Product } from 'src/products/product.entity';


@Injectable()
export class ProductsOrdersService {
    constructor(
        @InjectRepository(ProductsOrder) private repo : Repository<ProductsOrder>,
        @InjectRepository(Product) private repoProduct : Repository<Product>) {}


    async create(ProductOrderDto : CreateProductOrderDto, user:User) {
        const ProductOrder = this.repo.create(ProductOrderDto)
        ProductOrder.user = user
        const IdProduct = ProductOrderDto.products;
        const quantityBought = ProductOrderDto.quantity;
        await this.repoProduct.decrement({id:IdProduct},'stock',quantityBought)
        return this.repo.save(ProductOrder)
    }
}
