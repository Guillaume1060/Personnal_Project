import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { ConcertsOrder } from 'src/concerts-orders/concert-orders.entity';
import { ProductsOrder } from 'src/products-orders/product-orders.entity';
import { log } from 'console';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private repo: Repository<User>,
        @InjectRepository(ProductsOrder) private repoProduct : Repository<ProductsOrder>,
        @InjectRepository(ConcertsOrder) private repoConcert : Repository<ConcertsOrder>) {}
    create (newUser : CreateUserDto, password:string) {
        newUser.password = password
        const user = this.repo.create(newUser);
        return this.repo.save(user)
    }
    findOne(id:number) {
        if (!id) return null
        return this.repo.findOneBy({id});
    }
    find(email: string) {
        return this.repo.find({ where: { email } });
    }
    findAll() {
        return this.repo.find();
    }
    async update(id:number,attrs:Partial<User>) {
        const user = await this.repo.findOneBy({id});
        if (!user) throw new NotFoundException('user not found')
        Object.assign(user,attrs)
        return this.repo.save(user)
    }
    async remove(id:number) {
        const user = await this.repo.findOneBy({id});
        if (!user) throw new NotFoundException('user not found')
        // this.repo.delete(id) // No Hook
        return this.repo.remove(user); // Hook
    }

    async findAccountBalanceByUser(user: User) {
        return user.money
    }

    async updateAccountBalanceByUser(user: User, amount:string) {
        const value = parseInt(amount)
        console.log('user',user);
        user.money -= value
        return this.repo.save(user)
    }

    async findAllOrders(user: User) {
        let allProductOrdersByUser = await this.repoProduct.find({ where: { user:{id:user.id} },relations: ['products'] })
        let allConcertOrdersByUser = await this.repoConcert.find({ where: { user:{id:user.id} },relations: ['concerts'] })
        user.productsOrders =allProductOrdersByUser;
        user.concertsOrders =allConcertOrdersByUser;
        return user
    }
}
