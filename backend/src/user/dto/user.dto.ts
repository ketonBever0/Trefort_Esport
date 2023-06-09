import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UserPatchDto {

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    orgId: number;

    @IsNotEmpty()
    representative: boolean;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsOptional()
    profilePicture: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    educationNumber: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description: string;
}