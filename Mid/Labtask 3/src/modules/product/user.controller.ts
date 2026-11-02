import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "@/modules/product/user.service";
import {
  CreateUserDto
} from "@/modules/product/dto/user.dto";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    return await this.userService.createUser(userDto);
  }
}
