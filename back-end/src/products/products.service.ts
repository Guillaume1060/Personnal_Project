import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { GetEstimateDto } from './dtos/get-estimate.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private repo : Repository<Product>) {}

    create(productDto : CreateProductDto) {
        const product = this.repo.create(productDto)
        return this.repo.save(product)
    }

    getAll(){
        return this.repo.find()
    }

    async changeApproval(id: string, approved: boolean) {
        const product = await this.repo.findOne({ where: { id: parseInt(id) } });
        if (!product) {
            throw new NotFoundException('Product not found')
        }
        product.approved = approved
        return this.repo.save(product)
    }

    createEstimate({name, price, stock}:GetEstimateDto) {
        return this.repo
        .createQueryBuilder()
        .select('*')
        // .select('AVG(price','price')
        .where('name = :name',{name})
        // .andWhere('name=:name',{name}) // ici second filtre (andWhere, not where again)
        .andWhere('price - :price BETWEEN -5 AND 5',{price})
        // .andWhere('approved IS TRUE')
        .orderBy('stock - :stock','DESC').setParameters({stock}) // methode differente pour le tri
        .limit(2)
        // .getRawOne()
        .getRawMany()        
    }
}
