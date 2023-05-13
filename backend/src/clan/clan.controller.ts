import { Body, Controller, Get, Param, ParseIntPipe, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ClanService } from './clan.service';
import { JwtGuard } from 'src/auth/guard';
import { ClanDto } from './dto';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';
import { FileUploadService } from 'src/fileupload/fileupload.service';
import { FileInterceptor } from '@nestjs/platform-express';

const dir = 'clanlogos';
const storage = new FileUploadService().setStorage(dir).storage;

//@UseGuards(JwtGuard)
@Controller('clans')
export class ClanController {
    constructor(
        private clanService: ClanService,
        private fileUploadService: FileUploadService
    ) {}

    @Get('all')
    async getClans() {
        return this.clanService.getClans();
    }

    @Post()
    async createClan(
        @Body() dto: ClanDto,
        @GetUser() user: User
    ) {
        return this.clanService.createClan(dto, user);
    }

    @Get(':id')
    getClan(
        @Param('id', new ParseIntPipe())
        id: number
    ){
        return this.clanService.getClanById(id);
    }

    @Get('pendingrequests/:id')
    getPendingRequests(
        @Param('id', new ParseIntPipe())
        id: number
    ){
        return this.clanService.getPendingRequests(id);
    }

    @Get('members/:id')
    getClanMembers(
        @Param('id', new ParseIntPipe())
        id: number
    ) {
        return this.clanService.getClanMembers(id);
    }

    @Get('logo/:logoname')
    getClanLogo(
        @Param('logoname')
        logoname: string,
        @Res() res
    ){
        return this.fileUploadService.sendFile(logoname, res, dir);
    }

    @Post('uploadlogo/:id')
    @UseInterceptors(FileInterceptor('file', { storage }))
    uploadLogo(
        @UploadedFile() file: Express.Multer.File,
        @Param('id', new ParseIntPipe())
        id: number
    ){
        return this.clanService.uploadLogo(file, id);
    }

    @Post('leave/:id')
    leaveClan(
        @Param('id', new ParseIntPipe())
        id: number,
        @GetUser() user: User
    ) {
        return this.clanService.leaveClan(id, user);
    }

    @Post('/join/:id')
    joinClan(
        @Param('id', new ParseIntPipe())
        id: number,
        @GetUser() user: User
    ){
        return this.clanService.joinClan(id, user);
    }

    @Post('accept/clan/:id/user/:userId')
    acceptClanRequest(
        @Param('id', new ParseIntPipe())
        id: number,
        @Param('userId', new ParseIntPipe())
        userId: number,
    ) {
        return this.clanService.acceptClanRequest(userId, id);
    }

}
