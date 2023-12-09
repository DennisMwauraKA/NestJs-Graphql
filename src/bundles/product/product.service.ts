import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}
  async create(createProductInput: CreateProductInput): Promise<Product> {
    const product = this.productRepository.create(createProductInput); // creating your product and saving it
    return await this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOneOrFail({ where: { id } });
  }

  async update(id: number, updateProductInput: UpdateProductInput): Promise<Product> {
    await this.productRepository.update(id, updateProductInput);
    return await this.productRepository.findOne({where:{id}});
  }


  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
