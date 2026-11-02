import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";

export class CreateTestDto {
  @IsString()
  @MinLength(3, { message: "Full name must be at least 3 characters long" })
  @IsNotEmpty()
  fullName!: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(8, { message: "Password must be at least 8 characters long" })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
  )
  @IsNotEmpty()
  password!: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(18, { message: "Age must be at least 18" })
  @Max(60, { message: "Age can be at most 60" })
  age: number = 0;

  @IsString()
  @MinLength(11, { message: "Phone number must be exactly 11 characters long" })
  @MaxLength(11, { message: "Phone number must be exactly 11 characters long" })
  @Matches(/^01/, { message: "Phone number must start with '01'" })
  @IsNotEmpty()
  phone: string = "";

  @IsString()
  @IsNotEmpty()
  @Matches(/^(student|teacher)$/, {
    message: "Account type must be either 'student' or 'teacher'",
  })
  accountType: string = "";

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(10, { message: "Address must be at least 10 characters long" })
  address: string = "";
}
