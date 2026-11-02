import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@/modules/product/entity/user.entity";
import { TestService } from "@/modules/test/test.service";
import { TestController } from "@/modules/test/test.controller";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [TestController],
  providers: [TestService],
  exports: [TestService],
})
export class TestModule {}
