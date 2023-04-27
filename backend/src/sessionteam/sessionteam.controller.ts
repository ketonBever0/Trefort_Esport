import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SessionTeamDto } from './dto';
import { SessionteamService } from './sessionteam.service';

@Controller('sessionteams')
export class SessionteamController {
    constructor(private sessionTeamService: SessionteamService){}

    @Post()
    createSessionTeam(
        @Body() dto: SessionTeamDto
    ) {
        return this.sessionTeamService.newSessionTeam(dto);
    }

    @Get(':teamname')
    getSessionTeam(
        @Param("teamname")
        teamname: string
    ){
        return this.sessionTeamService.getSessionTeam(teamname);
    }
}
