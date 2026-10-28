import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  model!: string;

  @IsString()
  @IsNotEmpty()
  number_plate!: string;

  @IsNumber()
  @IsNotEmpty()
  price!: number;

  @IsBoolean()
  is_rented!: boolean;
}

export class UpdateCarDto {
  @IsString()
  @IsOptional()
  model!: string;

  @IsString()
  @IsOptional()
  number_plate!: string;

  @IsNumber()
  @IsOptional()
  price!: number;

  @IsBoolean()
  @IsOptional()
  is_rented!: boolean;
}
