import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClanDto } from './dto';
import { User } from '@prisma/client';

@Injectable()
export class ClanService {
    constructor(private prismaService: PrismaService) {}

    async createClan(
        dto: ClanDto,
        user: User

    ) {

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
        const clan = await this.prismaService.clan.findUnique({
            where: {
                id: paramId,
            }
        });

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

        const clan = await this.prismaService.clan.findUnique({
            where: {
                id: paramId
            }
        });

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

    async acceptClanRequest(
        paramUserId: number,
        paramId: number
    ){
        const clan = await this.prismaService.clan.findUnique({
            where: {
                id: paramId
            }
        });

        if(!clan) return {message: "Nincs ilyen klán!"};

        const pendingRequest = await this.prismaService.clanUser.findMany({
            where: {
                userId: paramUserId,
                clanId: clan.id
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

    }

}
