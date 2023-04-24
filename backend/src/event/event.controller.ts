import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
    constructor (private eventService: EventService){}
    @Get()
    initEndpoint(){
        return {
            message: 'events'
        }
    }
}
