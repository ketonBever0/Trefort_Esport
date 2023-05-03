import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ClanDto {

    @IsNotEmpty()
    @IsNumber()
    leaderId: number;    

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsOptional()
    @IsString()
    logo: string;

    @IsNotEmpty()
    @IsOptional()
    @IsString()
    clanEmail: string;
}