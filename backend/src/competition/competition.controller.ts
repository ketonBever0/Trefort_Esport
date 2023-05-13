import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CompetitionDto } from './dto';
import { JwtGuard } from 'src/auth/guard';

@Controller('competitions')
export class CompetitionController {
    constructor(private competitionService: CompetitionService) {}

    @UseGuards(JwtGuard)
    @Post()
    createCompetition(@Body() dto: CompetitionDto){
        return this.competitionService.createCompetition(dto);
    }

    @Get('all')
    getAllCompetition(){
        return this.competitionService.getAllCompetition();
    }

    @Get(':id')
    getCompetition(
        @Param('id', new ParseIntPipe())
        id: number
    ) {
        return this.competitionService.getCompetition(id);
    }

    @Get('event/:id')
    getCompetitionsByEvent(
        @Param('id', new ParseIntPipe())
        id: number
    ) {
        return this.competitionService.getCompetitionsByEvent(id);
    }

    @UseGuards(JwtGuard)
    @Patch(':id')
    updateCompetition(
        @Param('id', new ParseIntPipe())
        id: number,
        @Body() dto: CompetitionDto
    ) {
        return this.competitionService.updateCompetition(id, dto);
    }

}
