import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SessionTeamDto } from './dto';
import { User } from '@prisma/client';
import * as argon from 'argon2';

@Injectable()
export class SessionteamService {
    constructor(
        private prismaService: PrismaService) {}

    async newSessionTeam(dto: SessionTeamDto) {
        const hash = await argon.hash(dto.password);
    }

    async getSessionTeam(teamName: string, compid: number) {

    }

    async joinSessionTeam(user:User){

    }

}
