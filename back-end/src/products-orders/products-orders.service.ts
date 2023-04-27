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


        //TODO code to present
    // ICI EST LE SERVICE DE LA CREATION DANS LA TABLE PRODUCT-ORDER
    async create(ProductOrderDto : CreateProductOrderDto, user:User) {
        // 1. GET INFO FROM OUR REQUEST BODY (ProductID & QTY)
        const { productID, quantity } = ProductOrderDto;
        // 2. WE CREATE THE PRODUCTORDER
        const productOrder = this.repo.create(ProductOrderDto)
        // 3. WE LOOK FOR THE PRODUCT IN OUR DB
        const product = await this.repoProduct
          .createQueryBuilder('product')
          .select(['product.id', 'product.price', 'product.stock'])
          .where('product.id = :id', { id: productID })
          .andWhere('product.stock >= :quantity', { quantity })
          .getOne();
        // 4. IF NO PRODUCT, IT MEANS THERE NOT ENOUGH STOCK
        if (!product) throw new UnauthorizedException('Not enough stock');
        // 5. CALCULATION OF THE ORDER AMOUNT
        const amount = product.price * quantity;
        // NB:updated userAccount in auth/balance/{amount} for all orders sent.
        // 6. CHECK IF USER HAS ENOUGH MONEY (already checked auth/balance/{amount} )
        if (user.money < amount ) throw new UnauthorizedException('Not enough money') 
        // 7. UPDATE OF THE PRODUCT ORDER (add user & amount)
        productOrder.user = user
        productOrder.amount = amount
        // 8. UPDATE OF OUR STOCK PRODUCT
        await this.repoProduct.decrement({id:productID},'stock',quantity)
        const updatedStock = (await this.repoProduct.findOneBy({id:productID})).stock
        // 9. IF THE STOCK IS NULL, WE UPDATE AVAILABLE TO FALSE
        if (updatedStock==0) {
            await this.repoProduct.update({id:productID},{available:false})
        }
        // 10. WE SAVE THE PRODUCTORDER IN OUR DB AND SEND IT BACK TO THE CONTROLLER
        return this.repo.save(productOrder)
    }
    async findAllById(user: User) {
        let allProductOrdersByUser = await this.repo.find({ where: { user:{id:user.id} },relations: ['products'] })
        return allProductOrdersByUser
    }
}
