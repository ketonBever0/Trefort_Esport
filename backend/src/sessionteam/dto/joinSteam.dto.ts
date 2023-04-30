import { IsNotEmpty, IsString } from "class-validator";

export class JoinSessionTeamDto {
    @IsString()
    @IsNotEmpty()
    password: string;
}