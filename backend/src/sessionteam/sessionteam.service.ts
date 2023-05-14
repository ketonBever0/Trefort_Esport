import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JoinSessionTeamDto, SessionTeamDto } from './dto';
import { SessionTeam, User } from '@prisma/client';
import * as argon from 'argon2';

@Injectable({})
export class SessionteamService {
    constructor(
        private prismaService: PrismaService
    ) {}

    async newSessionTeam(dto: SessionTeamDto) {
        
        let hash = null;
        if(dto.password) {
            hash = await argon.hash(dto.password);
        }

        const sessionTeamsByCompetition = await this.prismaService.sessionTeam.findMany({
            where: {
                competitionId: dto.competitionId
            }
        });

        sessionTeamsByCompetition.forEach(sessionTeam => {
            if(sessionTeam.teamName === dto.teamName) {
                return {message: "Már létezik ilyen nevű csapat erre a versenyre!"}
            }
        });

        // create sessionTeam
        const sessionTeam = await this.prismaService.sessionTeam.create({
           data: {
                teamName: dto.teamName,
                clanId: dto.clanId || null,
                competitionId: dto.competitionId,
                password: dto.public !== undefined ? hash : null,
                public: dto.public,
                points: dto.points,
                description: dto.description || null,
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
            },
            select: {
                id: true,
                teamName: true,
                public: true,
                points: true,
                description: true,
                competition: {
                    select: {
                        id: true,
                        name: true,
                        game: true,
                        platform: true,
                        maxMemberCount: true,
                    }
                },
                members: {
                    select: {
                        user: {
                            select: {
                                username: true,
                                profilePicture: true
                            }
                        }
                    }
                },
           }
        });

        return sessionTeam ? {
            sessionTeam
        }: {message: 'Nincs ilyen csapat!'};
    }

    async getAllSessionTeam() {
        const sessionTeams = await this.prismaService.sessionTeam.findMany({
            where: {
                public: true
            },
            select: {
                id: true,
                teamName: true,
                public: true,
                points: true,
                description: true,
                competition: {
                    select: {
                        id: true,
                        name: true,
                        game: true,
                        platform: true,
                        maxMemberCount: true,
                    }
                },
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

        return {
            sessionTeams
        };
    }

    async joinSessionTeam(
        user: User,
        steamId: number,
        dto: JoinSessionTeamDto
    ){
        const sessionTeam = await this.getSessionTeamById(steamId);
        const sessionTeamTeamMembers = await this.prismaService.sessionTeamUser.findMany({
            where: {
                teamId: sessionTeam.id,
            }
        });
        const competitionTeams = await this.prismaService.competition.findUnique({
            select: {
                sessionTeams: {
                    select: {
                        id: true,
                        members: {
                            select: {
                                user: {
                                    select: {
                                        id: true
                                    }
                                }
                            }
                        }
                    }
                }
            },
            where: {
                id: sessionTeam.competitionId
            }
        });

        return {
            competitionTeams
        }

        // check if user is already in the team
        const member = sessionTeamTeamMembers.map(member => member.userId === user.id).includes(true);
        if(member) return {message: 'Már csatlakoztál a csapathoz!'};

        // check if team is full
        if(sessionTeamTeamMembers.length >= sessionTeam.competition.maxMemberCount) return {message: 'A csapat megtelt!'};



        if (!sessionTeam.public) {
            const valid = await argon.verify(sessionTeam.password, dto.password);
            if (!valid) return {message: 'Hibás jelszó!'};

            const updatedSessionTeam = await this.signUserToSessionTeam(sessionTeam, user, steamId);

            return {
                message: 'Sikeres csatlakozás a csapathoz',
                updatedSessionTeam
            }
        } else {

            const updatedSessionTeam = await this.signUserToSessionTeam(sessionTeam, user, steamId);
            return {
                message: 'Sikeres csatlakozás a csapathoz',
                updatedSessionTeam
            }
        }
            
    }

    async getSessionTeamsByCompetition(
        competitionId: number
    ){

        const sessionTeamsByCompetition = await this.prismaService.sessionTeam.findMany({
            where: {
                competitionId: competitionId
            },
            select: {
                id: true,
                teamName: true,
                public: true,
                points: true,
                description: true,
                competition: {
                    select: {
                        id: true,
                        name: true,
                        game: true,
                        platform: true,
                        maxMemberCount: true,
                    }
                },
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

        return {
            sessionTeamsByCompetition
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
                },
                competition: {
                    select: {
                        id: true,
                        maxMemberCount: true
                    }
                }
            }
        });
        return sessionTeam;
    }

    async signUserToSessionTeam(sessionTeam: SessionTeam, user: User, steamId: number) {
        const sessionTeamUser = await this.prismaService.sessionTeamUser.create({
            data: {
                userId: user.id,
                teamId: sessionTeam.id,
            }
        });
        
        const updatedSessionTeam = await this.getSessionTeamById(steamId);
        delete updatedSessionTeam.password;

        return updatedSessionTeam;
    }

}
