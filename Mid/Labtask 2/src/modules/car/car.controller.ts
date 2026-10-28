import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CarService } from "./car.service";
import { CreateCarDto, UpdateCarDto } from "./dto/car.dto";

@Controller("cars")
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  async createCar(@Body() productDto: CreateCarDto) {
    return await this.carService.createCar(productDto);
  }

  @Get()
  async getCars() {
    return await this.carService.getCars();
  }

  @Get(":id")
  async getCarById(@Param("id") id: string) {
    return await this.carService.getCarById(id);
  }

  @Patch(":id")
  async updateCar(@Param("id") id: string, @Body() productDto: Partial<UpdateCarDto>) {
    return await this.carService.updateCar(id, productDto);
  }

  @Delete(":id")
  async deleteCar(@Param("id") id: string) {
    return await this.carService.deleteCar(id);
  }
}
