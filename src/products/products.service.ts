import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IProduct } from './interfaces/product.interfaces';

@Injectable()
export class ProductsService {

  constructor( @InjectModel("products") private readonly productModel: Model<IProduct> ) {}
  
  async createProduct(createProductDto: CreateProductDto) {
    const createProduct = await new this.productModel(createProductDto)
    return await createProduct.save();
  }

  async getProducts() : Promise<IProduct[]> {
    const getProducts = await this.productModel.find({});
    return getProducts;
  }

  async getProduct(id: string) : Promise<IProduct> {
    const getProduct = await this.productModel.findById(id);
    return getProduct;
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    const updateProduct = await this.productModel.findByIdAndUpdate(id, updateProductDto, {new: true})

    if(!updateProduct) {
      throw new NotFoundException(`No se ha encontrado el producto con el id ${id}`)
    } else {
      return updateProduct;
    }
  }

  async deleteProduct(id: string) {
    const deleteProduct = await this.productModel.findByIdAndRemove(id);

    if(!deleteProduct) {
      throw new NotFoundException(`No se ha encontrado el producto con el id ${id}`)
    } else {
      return deleteProduct;
    }
  }
}
