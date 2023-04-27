import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SessionTeamDto {

    @IsString()
    @IsNotEmpty()
    teamName: string;

    @IsNumber()
    @IsNotEmpty()
    competitionId: number;

    @IsNotEmpty()
    @IsArray()
    users: Array<number>;

    @IsNotEmpty()
    @IsNumber()
    position: number;
}