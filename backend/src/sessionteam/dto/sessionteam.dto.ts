import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class SessionTeamDto {

    @IsString()
    @IsNotEmpty()
    teamName: string;

    @IsNumber()
    @IsNotEmpty()
    competitionId: number;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsArray()
    users: Array<number>;

    @IsOptional()
    @IsBoolean()
    @IsNotEmpty()
    public: boolean;

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    points: number;
}