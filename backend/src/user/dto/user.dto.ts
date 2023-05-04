import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UserPatchDto {

    @IsNumber()
    @IsNotEmpty()
    orgId: number;

    @IsNotEmpty()
    representative: boolean;

    @IsString()
    @IsNotEmpty()
    username: string;

    profilePicture: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    address: string;
    
    @IsNumber()
    @IsNotEmpty()
    educationNumber: number;

    @IsString()
    @IsNotEmpty()
    description: string;
}