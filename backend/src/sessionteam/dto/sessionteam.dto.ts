import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SessionTeamDto {

    @IsString()
    @IsNotEmpty()
    sessionId: string;

    @IsNumber()
    @IsNotEmpty()
    competitionId: number;

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    @IsNumber()
    position: number;
}