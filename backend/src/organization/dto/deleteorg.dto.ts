import { IsNotEmpty, IsNumber } from "class-validator";

export class DelOrgDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
}