import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class SessionTeamDto {

    @IsString()
    @IsNotEmpty()
    teamName: string;

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    clanId: number;

    @IsNumber()
    @IsNotEmpty()
    competitionId: number;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsBoolean()
    @IsNotEmpty()
    public: boolean;

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    points: number;
}