import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SessionTeamDto } from './dto';

@Injectable()
export class SessionteamService {
    constructor(private prismaService: PrismaService) {}

    async newSessionTeam(dto: SessionTeamDto) {
        for (let i = 0; i < dto.users.length; i++) {
            const sessionTeamRecord = await this.prismaService.sessionTeam.create({
                data: {
                    teamName: dto.teamName,
                    competitionId: dto.competitionId,
                    userId: dto.users[i],
                    position: dto.position
                }
            });
            console.log(sessionTeamRecord);
        }
    }

    async getSessionTeam(teamName: string) {
        const sessionTeam = await this.prismaService.sessionTeam.findMany({
            where: {
                teamName: teamName,
            },
            select: {
                teamName: true,
                public: true,
                user: {
                    select: {
                        username: true,
                        profilePicture: true,

                    }
                },
                competition: {
                    select: {
                        name: true,
                        maxMemberCount: true,
                    }
                }
            }
        });

        return {
            sessionTeam
        }
    }

}
