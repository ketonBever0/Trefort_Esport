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

    @Post()
    createSessionTeam(
        @Body() dto: SessionTeamDto
    ) {
        return this.sessionTeamService.newSessionTeam(dto);
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
