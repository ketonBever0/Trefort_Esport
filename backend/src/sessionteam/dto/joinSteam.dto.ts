import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class JoinSessionTeamDto {

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    teamName: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    password: string;
}