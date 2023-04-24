import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventDto } from './dto';

@Injectable()
export class EventService {
    constructor (private prismaService: PrismaService){}

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

}
