import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ClanDto {

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