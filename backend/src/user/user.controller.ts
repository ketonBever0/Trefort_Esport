import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser, Roles } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { UserPatchDto } from './dto';
import { UserService } from './user.service';
import { RoleGuard } from 'src/auth/guard/role.guard';

@UseGuards(JwtGuard, RoleGuard)
@Controller('users')
export class UserController {
    constructor(private userService: UserService){}

    @Roles('admin')
    @Get('me')
    getMe(@GetUser() user: User) {
        return user;
    }

    @Patch('modify')
    patchUser(
        @GetUser() user: User,
        @Body() dto: UserPatchDto
    ) {
        return this.userService.modifyUserData(user, dto);
    }

    @Patch('delete')
    deleteUser(
        @GetUser() user: User
    ){
        return this.userService.deleteUser(user);
    }
}
