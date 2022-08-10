import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto, @Res() res: Response) {
    const createProducts = await this.productsService.createProduct(createProductDto);
    return res.status(HttpStatus.OK).json({
      message: "Producto creado satisfactoriamente",
      createProducts
    })
  }

  @Get()
  async getProducts(@Res() res: Response) {
    const products = await this.productsService.getProducts();
    return res.status(HttpStatus.OK).json({
      message: "Productos almancenados",
      products
    })
  }

  @Get(':id')
  async getProducte(@Param('id') id: string, @Res() res: Response) {
    const getProduct = await this.productsService.getProduct(id);
    return res.status(HttpStatus.OK).json({
      message: "Producto encontrado satisfactoriamente",
      getProduct
    })
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto, @Res() res: Response) {
    const updateProduct = await this.productsService.updateProduct(id, updateProductDto);
    return res.status(HttpStatus.OK).json({
      message: "Producto editado satisfactoriamente",
      updateProduct
    })
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string, @Res() res: Response) {
    const deleteProduct = await this.productsService.deleteProduct(id);
    return res.status(HttpStatus.OK).json({
      message: "Producto eliminado satisfactoriamente",
      deleteProduct
    })
  }
}
