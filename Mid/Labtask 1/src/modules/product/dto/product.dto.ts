import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  category!: string;

  @IsNumber()
  @IsNotEmpty()
  price: number = 0;

  @IsNumber()
  @IsNotEmpty()
  quantity: number = 0;
}

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name: string = "";

  @IsString()
  @IsOptional()
  category: string = "";

  @IsDecimal()
  @IsOptional()
  price: number = 0;

  @IsNumber()
  @IsOptional()
  quantity: number = 0;
}
