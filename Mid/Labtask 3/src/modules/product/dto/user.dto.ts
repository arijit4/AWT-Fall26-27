import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(3, {message: "Full name must be at least 3 characters long"})
  @IsNotEmpty()
  fullName!: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(8, {message: "Password must be at least 8 characters long"})
  @IsNotEmpty()
  password!: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(18, {message: "Age must be at least 18"})
  @Max(60, {message: "Age can be at most 60"})
  age: number = 0;

  @IsString()
  @MinLength(11, {message: "Phone number must be exactly 11 characters long"})
  @MaxLength(11, {message: "Phone number must be exactly 11 characters long"})
  @IsNotEmpty()
  phone: string = "";

  @IsString()
  @IsNotEmpty()
  accountType: string = "";

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  address: string = "";
}
