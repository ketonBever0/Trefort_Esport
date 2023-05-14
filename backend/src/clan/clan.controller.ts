import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ClanService } from './clan.service';
import { JwtGuard } from 'src/auth/guard';
import { ClanDto } from './dto';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@Controller('clans')
export class ClanController {
    constructor(private clanService: ClanService) {}

    @Get('all')
    async getClans() {
        return this.clanService.getClans();
    }

    @UseGuards(JwtGuard)
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

    @UseGuards(JwtGuard)
    @Post('leave/:id')
    leaveClan(
        @Param('id', new ParseIntPipe())
        id: number,
        @GetUser() user: User
    ) {
        return this.clanService.leaveClan(id, user);
    }

    @UseGuards(JwtGuard)
    @Post('/join/:id')
    joinClan(
        @Param('id', new ParseIntPipe())
        id: number,
        @GetUser() user: User
    ){
        return this.clanService.joinClan(id, user);
    }

    @UseGuards(JwtGuard)
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
