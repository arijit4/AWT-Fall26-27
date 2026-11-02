import { ValidationPipe, Body, Controller, Post } from "@nestjs/common";
import { CreateTestDto } from "@/modules/test/dto/test.dto";
import { TestService } from "@/modules/test/test.service";

@Controller("tests")
export class TestController {
  constructor(private readonly userService: TestService) {}

  @Post()
  async createUser(@Body(ValidationPipe) userDto: CreateTestDto) {
    return await this.userService.createUser(userDto);
  }
}
