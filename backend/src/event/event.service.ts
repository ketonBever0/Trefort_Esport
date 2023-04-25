import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventDto } from './dto';

@Injectable()
export class EventService {
    constructor (private prismaService: PrismaService){}

    async getEvent(paramId: number) {
        try {
            const event = await this.prismaService.event.findUniqueOrThrow({
                where: {
                    id: paramId,
                }
            });
    
            return event;   
        } catch (error) {
            throw new ForbiddenException('Nincs ilyen adat')
        }
    }

    async getAllEvents() {
        const events = await this.prismaService.event.findMany({});
        return {
            events
        }
    }

    async addNewEvent(dto: EventDto) {
        try {
            const event = await this.prismaService.event.create({
                data: {
                    name: dto.name,
                    startDate: dto.startDate,
                    endDate: dto.endDate,
                    location: dto.location,
                    description: dto.description
                }
            });
            return {
                message: 'Esemény létrehozva!',
                event
            }   
        } catch (error) {
            if(error.meta.target.includes('key')) {
                if(error.code === 'P2002') {
                    throw new ForbiddenException('Ilyen néven már van esemény');
                }
            }
        }
    }

    async updateEvent(paramId: number, dto: EventDto) {
        const event = await this.prismaService.event.update({
            where: {
                id: paramId
            },
            data: {
                name: dto.name,
                startDate: dto.startDate,
                endDate: dto.endDate,
                location: dto.location,
                description: dto.description
            }
        });

        return {
            message: "Sikeres esemény módosítás",
            event
        }
    }
}
