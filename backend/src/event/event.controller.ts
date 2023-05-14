import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { JwtGuard } from 'src/auth/guard';
import { EventDto } from './dto';

@UseGuards(JwtGuard)
@Controller('events')
export class EventController {
    constructor (private eventService: EventService){}

    @Post()
    addNewEvent(@Body() dto: EventDto){
        return this.eventService.createEvent(dto);
    }

    @Get('all')
    getAllEvents(){
        return this.eventService.getAllEvents();
    }

    @Get(':id')
    getEvent(
        @Param('id', new ParseIntPipe())
        id: number
    ){
        return this.eventService.getEvent(id);
    }

    @Patch(':id')
    updateEvent(
        @Param('id', new ParseIntPipe())
        id: number,
        @Body() dto: EventDto
    ){
        return this.eventService.updateEvent(id, dto);
    }
}
