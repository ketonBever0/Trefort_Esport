import { IsNotEmpty, IsString } from "class-validator";

export class OrganizationDto {

    @IsString()
    @IsNotEmpty()
    picture: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsString()
    @IsNotEmpty()
    description: string; 
}