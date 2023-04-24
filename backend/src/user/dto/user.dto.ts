import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UserPatchDto {

    clanId: number;

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
    
    educationNumber: number;

    description: string;
}