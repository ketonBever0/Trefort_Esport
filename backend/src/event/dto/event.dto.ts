import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";


export class EventDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    startDate: Date;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    endDate: Date; 

    @IsNotEmpty()
    @IsString()
    description: string;
}