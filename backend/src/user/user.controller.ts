import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser, Roles } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { UserPatchDto } from './dto';
import { UserService } from './user.service';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Observable, of } from 'rxjs';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path = require('path');

export const storage = {
    storage: diskStorage({
        destination: './uploads/profileimages',
        filename: (req, file, cb) => {
            // get file name
            const fileName = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
            // get file extension
            const fileExtName = path.parse(file.originalname).ext;
            // return file name and extension
            cb(null, `${fileName}${fileExtName}`);
        }
    })
}

@UseGuards(JwtGuard, RoleGuard)
@Controller('users')
export class UserController {
    constructor(
        private userService: UserService,
        
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
    @UseInterceptors(FileInterceptor('file', storage))
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
        return of(res.sendFile(path.join(process.cwd(), 'uploads/profileimages/' + imageName)));
    }
}
