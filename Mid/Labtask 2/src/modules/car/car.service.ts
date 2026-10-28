import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCarDto } from "./dto/car.dto";
import { Car } from "./entity/car.entity";

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  async getCars() {
    try {
      const car = await this.carRepository.find();
      return car;
    } catch (error) {
      throw error;
    }
  }

  async getCarById(id: string) {
    try {
      const car = await this.carRepository.findOne({ where: { id } });
      if (!car) {
        throw new NotFoundException("Car with ID not found");
      }
      return car;
    } catch (error) {
      throw error;
    }
  }

  async createCar(dto: CreateCarDto) {
    try {
      const car = this.carRepository.create(dto);
      return await this.carRepository.save(car);
    } catch (error) {
      throw error;
    }
  }

  async updateCar(id: string, dto: Partial<CreateCarDto>) {
    try {
      if (!id) {
        throw new NotFoundException("Car with ID not found");
      }
      const car = await this.carRepository.findOne({ where: { id } });
      if (!car) {
        throw new NotFoundException("Car with ID not found");
      }
      Object.assign(car, dto);
      const { id: uid, ...rest } = car;
      return await this.carRepository.update({ id: id }, rest);
    } catch (error) {
      throw error;
    }
  }

  async deleteCar(id: string) {
    try {
      const car = await this.carRepository.findOne({ where: { id } });
      if (!car) {
        throw new NotFoundException("Car with ID not found");
      }
      return await this.carRepository.delete({ id });
    } catch (error) {
      throw error;
    }
  }
}
