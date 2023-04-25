import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CompetitionDto {

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    eventId: number;

    @Type(() => Date)
    @IsDate()
    plannedStartDate: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    startDate: Date;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    endDate: Date;
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    game: string;
    
    @IsString()
    @IsNotEmpty()
    platform: string; 

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    registrationStart: Date;

    @Type(() => Date)
    @IsDate()
    registrationEnd: Date;
    
    @IsString()
    @IsNotEmpty()
    competitionType: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}