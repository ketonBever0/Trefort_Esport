import { Body, Controller, Get, Param, Post, ParseIntPipe, UseGuards } from '@nestjs/common';
import { SessionTeamDto } from './dto';
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
}
