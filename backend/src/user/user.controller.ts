import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser, Roles } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { UserPatchDto } from './dto';
import { UserService } from './user.service';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Observable } from 'rxjs';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from 'src/fileupload/fileupload.service';

const storage = new FileUploadService().setStorage('profileimages').storage;

//@UseGuards(JwtGuard, RoleGuard)
@Controller('users')
export class UserController {
    constructor(
        private userService: UserService,
        private fileUploadService: FileUploadService
    ) { }

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

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', { storage }))
    uploadFile(
        @UploadedFile() file: Express.Multer.File,
        @GetUser() user: User
    ) {
        return this.userService.uploadPicture(user, file);
    }

    @Get('profileimage/:imageName')
    findProfileImage(
        @Param('imageName')
        imageName: string,
        @Res() res
    ): Observable<Object> {
        return this.fileUploadService.sendFile(imageName, res);
    }
}
