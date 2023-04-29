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
        const sessionTeam = await this.prismaService.sessionTeam.create({
           data: {
                teamName: dto.teamName,
                competitionId: dto.competitionId,
                password: hash,
                public: dto.public,
                points: dto.points,
           }
        });

        dto.users.forEach(async (user) => {
            const sessionTeamUser = await this.prismaService.sessionTeamUser.create({
                data: {
                    userId: user,
                    teamId: sessionTeam.id,
                }
            });
        });

        return {
            message: 'Csapat sikeresen lérehozva!',
            sessionTeam
        }
    }

    async getSessionTeam(teamName: string, compid: number) {

    }

    async joinSessionTeam(user:User){

    }

}
