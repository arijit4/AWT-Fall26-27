import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductService } from "@/modules/product/product.service";
import {
  CreateProductDto,
  UpdateProductDto,
} from "@/modules/product/dto/product.dto";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() productDto: CreateProductDto) {
    return await this.productService.createProduct(productDto);
  }

  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Get(":id")
  async getProductById(@Param("id") id: string) {
    return await this.productService.getProductById(id);
  }

  @Patch(":id")
  async updateProduct(@Param("id") id: string, @Body() productDto: Partial<UpdateProductDto>) {
    return await this.productService.updateProduct(id, productDto);
  }

  @Delete(":id")
  async deleteProduct(@Param("id") id: string) {
    return await this.productService.deleteProduct(id);
  }
}
