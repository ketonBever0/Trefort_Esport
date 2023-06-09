import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompetitionDto } from './dto';

@Injectable()
export class CompetitionService {
    constructor(private prismaService: PrismaService){}

    async getCompetition(paramId: number) {
        const competition = await this.prismaService.competition.findUnique({
            where: {
                id: paramId,
            },
            include: {
                event: true,
            }
        });

        return {
            competition
        }
    }

    async getCompetitionsByEvent(
        paramId: number
    ) {
        const competitions = await this.prismaService.competition.findMany({
            where: {
                eventId: paramId
            },
            include: {
                event: true,
            }
        });

        return {
            competitions
        }
    }

    async getAllCompetition() {
        const competitions = await this.prismaService.competition.findMany({});
        return {
            competitions
        }
    }

    async createCompetition(dto: CompetitionDto){
        const competition = await this.prismaService.competition.create({
            data: {
                eventId: dto.eventId,
                plannedStartDate: dto.plannedStartDate,
                startDate: dto.startDate || null,
                endDate: dto.endDate || null,
                name: dto.name,
                maxMemberCount: dto.maxMemberCount || null,
                game: dto.game,
                platform: dto.platform,
                registrationStart: dto.registrationStart || null,
                registrationEnd: dto.registrationEnd,
                competitionType: dto.competitionType,
                description: dto.description
            }
        });
        return {
            message: 'Verseny létrehozva',
            competition
        }
    }

    async updateCompetition(
        paramId: number,
        dto: CompetitionDto
    ){
        const competition = await this.prismaService.competition.update({
            where: {
                id: paramId
            },
            data: {
                plannedStartDate: dto.plannedStartDate,
                startDate: dto.startDate,
                endDate: dto.endDate,
                name: dto.name,
                game: dto.game,
                platform: dto.platform,
                registrationStart: dto.registrationStart,
                registrationEnd: dto.registrationEnd,
                competitionType: dto.competitionType,
                description: dto.description
            }
        });

        return {
            message: 'Sikeres módosítás',
            competition
        }
    }
}
