import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entity/product.entity";
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getProducts() {
    try {
      const products = await this.productRepository.find();
      return products;
    } catch (error) {
      throw error;
    }
  }

  async getProductById(id: string) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException("Product with ID not found");
      }
      return product;
    } catch (error) {
      throw error;
    }
  }

  async createProduct(dto: CreateProductDto) {
    try {
      const product = this.productRepository.create(dto);
      return await this.productRepository.save(product);
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(id: string, dto: Partial<CreateProductDto>) {
    try {
      if (!id) {
        throw new NotFoundException("Product with ID not found");
      }
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException("Product with ID not found");
      }
      Object.assign(product, dto);
      const { id: uid, ...rest } = product;
      return await this.productRepository.update({ id: id }, rest);
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(id: string) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException("Product with ID not found");
      }
      return await this.productRepository.delete({ id });
    } catch (error) {
      throw error;
    }
  }
}
