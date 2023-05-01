import { Body, Controller, Get, Param, Post, ParseIntPipe, UseGuards } from '@nestjs/common';
import { JoinSessionTeamDto, SessionTeamDto } from './dto';
import { SessionteamService } from './sessionteam.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('sessionteams')
export class SessionteamController {
    constructor(private sessionTeamService: SessionteamService){}

    @Get('/all')
    getAllSessionTeams(){
        return this.sessionTeamService.getAllSessionTeam();
    }

    @Post()
    createSessionTeam(
        @Body() dto: SessionTeamDto
    ) {
        return this.sessionTeamService.newSessionTeam(dto);
    }

    @Get('/:teamId')
    getSEssionTeam(
        @Param('teamId', new ParseIntPipe())
        teamId: number
    ){
        return this.sessionTeamService.getSessionTeam(teamId);
    }

    @Post('/join/:teamId')
    joinSessionTeam(
        @Param('teamId', new ParseIntPipe())
        teamId: number,
        @GetUser() user: User,
        @Body() dto: JoinSessionTeamDto
    ){
        return this.sessionTeamService.joinSessionTeam(user, teamId, dto);
    }
}
