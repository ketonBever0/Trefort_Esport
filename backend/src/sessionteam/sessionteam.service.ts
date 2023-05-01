import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JoinSessionTeamDto, SessionTeamDto } from './dto';
import { User } from '@prisma/client';
import * as argon from 'argon2';

@Injectable({})
export class SessionteamService {
    constructor(
        private prismaService: PrismaService
    ) {}

    async newSessionTeam(dto: SessionTeamDto) {
        
        const hash = await argon.hash(dto.password);

        // create sessionTeam
        const sessionTeam = await this.prismaService.sessionTeam.create({
           data: {
                teamName: dto.teamName,
                clanId: dto.clanId || null,
                competitionId: dto.competitionId,
                password: dto.public !== undefined ? hash : null,
                public: dto.public,
                points: dto.points,
           }
        });

        // append users to sessionTeam
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

    async getSessionTeam(teamId: number) {
        const sessionTeam = await this.prismaService.sessionTeam.findUnique({
            where: {
                id: teamId
            }
        });

        return sessionTeam;
    }

    async joinSessionTeam(
        user: User,
        steamId: number,
        dto: JoinSessionTeamDto
    ){
        const sessionTeam = await this.getSessionTeamById(steamId);

        if (sessionTeam.public) {
            const sessionTeamUser = await this.prismaService.sessionTeamUser.create({
                data: {
                    userId: user.id,
                    teamId: sessionTeam.id,
                }
            });
            
            const updatedSessionTeam = await this.getSessionTeamById(steamId);

            return {
                message: 'Sikeres csatlakozás a csapathoz',
                updatedSessionTeam
            }
        } else {
            throw new ForbiddenException('Csatlakozás sikertelen!');
        }
    }
    

    async getSessionTeamById(steamId: number){
        const sessionTeam = await this.prismaService.sessionTeam.findUnique({
            where: {
                id: steamId
            }, include: {
                members: {
                    select: {
                        user: {
                            select: {
                                username: true,
                                profilePicture: true
                            }
                        }
                    }
                }
            }
        });
        return sessionTeam;
    }

}
