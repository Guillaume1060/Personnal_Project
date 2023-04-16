import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { ApproveProductDto } from './dtos/approve-product.dto';
import { AdminGuard } from 'src/_guards/admin.guard';
import { GetEstimateDto } from './dtos/get-estimate.dto';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService){}

    @Post()
    createProduct(@Body() body:CreateProductDto) {
        return this.productService.create(body)
    }

    @Patch('/:id')
    @UseGuards(AdminGuard)
    approveProduct(@Param('id') id:string,@Body() body:ApproveProductDto) {
        return this.productService.changeApproval(id,body.approved)
    }

    @Get()
    getAllProducts() {
        return this.productService.getAll()
    }

    // A supprimer ?
    // @Get()
    // getEstimate(@Query() query: GetEstimateDto) {
    //     return this.productService.createEstimate(query)
    // }



}
