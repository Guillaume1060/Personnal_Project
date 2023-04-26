import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { ApproveProductDto } from './dtos/approve-product.dto';
import { AdminGuard } from 'src/_guards/admin.guard';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Product } from './product.entity';

@ApiTags("Product management")
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService){}

    @Post()
    @ApiOperation({ summary : "Creation of product"})
    @ApiCreatedResponse({
        description: 'Product created',
        type: Product
    })
    createProduct(@Body() body:CreateProductDto) {
        return this.productService.create(body)
    }

    @ApiOperation({ summary : "Approvement of product (AdminGuard)"})
    @Patch('approve/:id')
    @ApiCreatedResponse({
        description: 'Approved Product',
        type: Product
    })
    @UseGuards(AdminGuard)
    approveProduct(@Param('id') id:string,@Body() body:ApproveProductDto) {
        return this.productService.changeApproval(id,body.approved)
    }

    @ApiOperation({ summary : "Get all products"})
    @Get()
    @ApiCreatedResponse({
        description: 'List of products',
        type: [Product]
    })
    getAllProducts() {
        return this.productService.getAll()
    }


    @ApiOperation({ summary : "Update of product (AdminGuard)"})
    @Patch('/:id')
    @ApiCreatedResponse({
        description: 'Updated product',
        type: Product
    })
    @UseGuards(AdminGuard)
    updateProduct(@Param('id') id:string, @Body() body:UpdateProductDto){
        return this.productService.update(+id,body) 
    }

    @Patch('unavailable/:id')
    @ApiOperation({ summary : "Close sales (AdminGuard)"})
    @UseGuards(AdminGuard)
    @ApiCreatedResponse({
        description: 'Make the sales unavailable',
        type: Product
    })
    removeProduct(@Param('id') id:string){
        return this.productService.remove(+id) 
    }
}
