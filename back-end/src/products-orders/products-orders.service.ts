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
        @InjectRepository(Product) private repoProduct : Repository<Product>,
        // @InjectRepository(User) private repoUser: Repository<User>
        ) {}


    async create(ProductOrderDto : CreateProductOrderDto, user:User) {
        const ProductOrder = this.repo.create(ProductOrderDto)
        ProductOrder.user = user
        const IdProduct = ProductOrderDto.products;
        const quantityBought = ProductOrderDto.quantity;
        await this.repoProduct.decrement({id:IdProduct},'stock',quantityBought)
        return this.repo.save(ProductOrder)
    }

    async findAllById(user: User) {
        console.log(user);
        let allProductOrdersByUser = await this.repo.find({ where: { user:{id:user.id} },relations: ['products'] })
        return allProductOrdersByUser
    }



}
