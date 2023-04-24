import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { ApproveProductDto } from './dtos/approve-product.dto';
import { AdminGuard } from 'src/_guards/admin.guard';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Gestion des produits")
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService){}

    @Post()
    createProduct(@Body() body:CreateProductDto) {
        return this.productService.create(body)
    }

    @Patch('approve/:id')
    @UseGuards(AdminGuard)
    approveProduct(@Param('id') id:string,@Body() body:ApproveProductDto) {
        return this.productService.changeApproval(id,body.approved)
    }

    @Get()
    getAllProducts() {
        return this.productService.getAll()
    }

    @Patch('/:id')
    updateProduct(@Param('id') id:string, @Body() body:UpdateProductDto){
        return this.productService.update(+id,body) 
    }

    @Patch('unavailable/:id')
    removeProduct(@Param('id') id:string){
        return this.productService.remove(+id) 
    }
}
