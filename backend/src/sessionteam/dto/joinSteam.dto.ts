import { IsNotEmpty, IsOptional, IsString } from "class-validator";

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