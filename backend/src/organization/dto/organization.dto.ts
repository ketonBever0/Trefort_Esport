import { IsNotEmpty, IsString } from "class-validator";

export class OrganizationDto {

    @IsString()
    @IsNotEmpty()
    name: string;

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

    status: string;

    @IsString()
    @IsNotEmpty()
    description: string; 
}