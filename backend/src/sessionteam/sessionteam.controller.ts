import { Body, Controller, Get, Param, Post, ParseIntPipe } from '@nestjs/common';
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

    @Get(':teamname/:compid')
    getSessionTeam(
        @Param("teamname")
        teamname: string,
        @Param("compid", new ParseIntPipe())
        compid: number
    ){
        return this.sessionTeamService.getSessionTeam(teamname, compid);
    }
}
