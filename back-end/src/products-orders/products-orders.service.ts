import { Injectable, UnauthorizedException } from '@nestjs/common';
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
        console.log('yesy');
        const { products, quantity } = ProductOrderDto;
        const productOrder = this.repo.create(ProductOrderDto)
        const product = await this.repoProduct
          .createQueryBuilder('product')
          .select(['product.id', 'product.price', 'product.stock'])
          .where('product.id = :id', { id: products })
          .andWhere('product.stock >= :quantity', { quantity })
          .getOne();
        if (!product) throw new UnauthorizedException('Not enough stock');
        const amount = product.price * quantity;
        productOrder.user = user
        productOrder.amount = amount
        // Update stock
        await this.repoProduct.decrement({id:products},'stock',quantity)
        const updatedStock = (await this.repoProduct.findOneBy({id:products})).stock
        if (updatedStock<=0) {
            await this.repoProduct.update({id:products},{available:false})
        }
        return this.repo.save(productOrder)
    }

    async findAllById(user: User) {
        let allProductOrdersByUser = await this.repo.find({ where: { user:{id:user.id} },relations: ['products'] })
        return allProductOrdersByUser
    }
}
