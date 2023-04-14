import { Controller, Get, Param, Req } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor (private readonly userService: UserService){}
    @Get(':id')
    getUser(@Param() params): any {
        return this.userService.getUserById(params.id);
    }
}
