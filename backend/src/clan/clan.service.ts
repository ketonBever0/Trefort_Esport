import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClanDto } from './dto';

@Injectable()
export class ClanService {
    constructor(private prismaService: PrismaService) {}

    async createClan(dto: ClanDto) {
        const clan = await this.prismaService.clan.create({
            data: {
                leaderId: dto.leaderId,
                name: dto.name,
                logo: dto.logo,
                clanEmail: dto.clanEmail
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

    async updateClan(paramId: number, dto: ClanDto) {
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

}
