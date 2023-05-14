import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class SignUpDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    educationNumber: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description: string;
}