import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClanDto } from './dto';
import { Clan, User } from '@prisma/client';
import { FileUploadService } from 'src/fileupload/fileupload.service';

@Injectable()
export class ClanService {
    constructor(
        private prismaService: PrismaService,
        private fileUploadService: FileUploadService
    ) {}

    async createClan(
        dto: ClanDto,
        user: User

    ) {
        // check if user already has a clan
        const clan = await this.prismaService.clan.create({
            data: {
                leaderId: user.id,
                name: dto.name,
                logo: dto.logo,
                clanEmail: dto.clanEmail
            }
        });

        // creatre user clan record
        await this.prismaService.clanUser.create({
            data: {
                clanId: clan.id,
                userId: user.id
            }
        });

        return {
            message: "Clan sikeresen létrehozva!",
            clan
        }
    }

    async getClans() {
        const clans = await this.prismaService.clan.findMany({});

        return {
            clans
        };
    }

    async getClanById(paramId: number) {
        const clan = await this.getClan(paramId);

        return {
            clan
        };
    }

    async updateClan(
        paramId: number,
        dto: ClanDto
    ) {
        const clan = await this.prismaService.clan.update({
            where: {
                id: paramId,
            },
            data: {
                name: dto.name,
                logo: dto.logo,
                clanEmail: dto.clanEmail
            }
        });

        return {
            message: "Clan sikeresen frissítve!",
            clan
        };
    }

    async deleteClan(paramId: number) {
        const clan = await this.prismaService.clan.update({
            where: {
                id: paramId,
            },
            data: {
                status: "deleted"
            }
        });

        return {
            message: "Clan sikeresen törölve!",
            clan
        };
    }

    async joinClan(
        paramId: number,
        user: User
    ) {

        const clan = await this.getClan(paramId);

        const memberOfClan = await this.prismaService.clanUser.findMany({
            where: {
                userId: user.id,
                clanId: clan.id
            }
        });

        if(memberOfClan.length > 0) return {message: "Már a klán tagja vagy!"}

        const newClanMember = await this.prismaService.clanUser.create({
            data: {
                userId: user.id,
                clanId: clan.id
            }
        });

        return {
            message: `Kérésed jóváhagyásra vár!`
        }
    }

    async getPendingRequests(
        clanId: number
    ) {
        const pendingRequests = await this.prismaService.clanUser.findMany({
            where: {
                member: false,
                clanId: clanId
            },
            select: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        profilePicture: true
                    }
                }
            }
        });

        return {
            pendingRequests
        }
    }

    async getClanMembers(
        id: number
    ) {
        const clanMembers = await this.prismaService.clan.findUnique({
            where: {
                id: id
            },
            select: {
                users: {
                    select: {
                        user: {
                            select: {
                                id: true,
                                username: true,
                                profilePicture: true
                            }
                        }
                    }
                }
            }
        });

        return {
            clanMembers
        }
    }

    async acceptClanRequest(
        paramUserId: number,
        paramId: number
    ){
        const clan = await this.getClan(paramId);

        if(!clan) return {message: "Nincs ilyen klán!"};

        const pendingRequest = await this.prismaService.clanUser.findMany({
            where: {
                userId: paramUserId,
                clanId: clan.id,
            },
            select: {
                id: true
            }
        });

        const acceptClanRequest = await this.prismaService.clanUser.update({
            where: {
                id: pendingRequest[0].id
            }, data: {
                member: true,
            }
        });

        return {
            message: "Kérés sikeresen elfogadva!"
        }

    }

    async leaveClan(
        paramId: number,
        user: User
    ) {
        const clan = await this.getClan(paramId);

        const memberOfClan = await this.prismaService.clanUser.findMany({
            where: {
                userId: user.id,
                clanId: clan.id
            }
        });

        const leaveClan = await this.prismaService.clanUser.delete({
            where: {
                id: memberOfClan[0].id,
            }
        });

        return {
            message: `Klán elhagyva!`
        }
    }

    async kickFromClan() {
        
    }

    async getClan(id: number)
    : Promise<Clan> 
    {
        return await this.prismaService.clan.findUnique({
            where: {
                id: id
            }
        });
    }

}
