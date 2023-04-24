import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { isNullOrUndefined } from "util";

export class UserPatchDto {

    clanId: number;

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