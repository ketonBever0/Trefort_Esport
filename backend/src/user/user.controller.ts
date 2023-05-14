<<<<<<< Updated upstream
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, UseGuards } from '@nestjs/common';
=======
import { Body, Controller, Delete, Get, HttpStatus, Param, ParseFilePipeBuilder, ParseIntPipe, Patch, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
>>>>>>> Stashed changes
import { User } from '@prisma/client';
import { GetUser, Roles } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { UserPatchDto } from './dto';
import { UserService } from './user.service';
import { RoleGuard } from 'src/auth/guard/role.guard';

@UseGuards(JwtGuard, RoleGuard)
@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    // @Roles('admin')
    @Get('me')
    getMe(@GetUser() user: User) {
        return user;
    }

    @Get('all')
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Patch()
    patchUser(
        @GetUser() user: User,
        @Body() dto: UserPatchDto
    ) {
        return this.userService.updateUserData(user, dto);
    }

    @Delete()
    deleteUser(
        @GetUser() user: User
    ) {
        return this.userService.deleteUser(user);
    }

    @Get(':id')
    getSingleUser(
        @Param('id', new ParseIntPipe())
        id: number
    ) {
        return this.userService.getSingleUser(id);
    }
<<<<<<< Updated upstream
=======

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', { storage }))
    uploadFile(
        @UploadedFile(
            new ParseFilePipeBuilder()
            .addFileTypeValidator({
                fileType: 'jpeg'
            })
            .build({
                errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
            })
        )
        file: Express.Multer.File,
        @GetUser() user: User
    ) {
        return this.userService.uploadPicture(user, file);
    }

    @Get('profileimage/:imageName')
    findProfileImage(
        @Param('imageName')
        imageName: string,
        @Res() res,
    ): Observable<Object> {
        return this.fileUploadService.sendFile(imageName, res, dir);
    }
>>>>>>> Stashed changes
}
