import { ForbiddenException, Injectable } from '@nestjs/common';
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
        }
    }

    async getSessionTeam(teamName: string, compid: number) {
        try {
            const sessionTeam = await this.prismaService.sessionTeam.findMany({
                where: {
                    teamName: teamName,
                    competitionId: compid
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
    
            const res = {
                teamName,
                public: sessionTeam[0].public,
                users: sessionTeam.map(user => {
                    const useraname = user.user.username;
                    const profilePicture = user.user.profilePicture;
                    return {
                        useraname,
                        profilePicture
                    }
                }),
                competitionName: sessionTeam[0].competition.name,
                maxMemberCount: sessionTeam[0].competition.maxMemberCount
            }
    
            return res;   
        } catch (error) {
            throw new ForbiddenException('Valami gond');
        }
    }

}
