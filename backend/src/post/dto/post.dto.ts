import { IsNotEmpty, IsString } from "class-validator";

export class PostDto {     

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    header: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}