import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class JoinSessionTeamDto {
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    password: string;
}