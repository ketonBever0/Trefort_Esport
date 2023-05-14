import { Body, Controller, Get, Param, Post, ParseIntPipe, UseGuards } from '@nestjs/common';
import { JoinSessionTeamDto, SessionTeamDto } from './dto';
import { SessionteamService } from './sessionteam.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@Controller('sessionteams')
export class SessionteamController {
    constructor(private sessionTeamService: SessionteamService){}

    @Get('/all')
    getAllSessionTeams(){
        return this.sessionTeamService.getAllSessionTeam();
    }

    @UseGuards(JwtGuard)
    @Post()
    createSessionTeam(
        @Body() dto: SessionTeamDto,
        @GetUser() user: User
    ) {
        return this.sessionTeamService.newSessionTeam(dto, user);
    }

    @Get('/:teamId')
    getSEssionTeam(
        @Param('teamId', new ParseIntPipe())
        teamId: number
    ){
        return this.sessionTeamService.getSessionTeam(teamId);
    }

    @Get('competition/:competitionId')
    getSessionTeamsByCompetition(
        @Param('competitionId', new ParseIntPipe())
        competitionId: number
    ) {
        return this.sessionTeamService.getSessionTeamsByCompetition(competitionId);
    }

    @UseGuards(JwtGuard)
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
