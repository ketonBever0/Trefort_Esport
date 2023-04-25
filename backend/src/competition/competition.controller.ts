import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CompetitionDto } from './dto';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('competitions')
export class CompetitionController {
    constructor(private competitionService: CompetitionService) {}

    @Get('all')
    getAllCompetition(){
        return this.competitionService.getAllCompetition();
    }

    @Post()
    createCompetition(@Body() dto: CompetitionDto){
        return this.competitionService.createCompetition(dto);
    }

    @Get(':id')
    getCompetition(
        @Param('id', new ParseIntPipe())
        id: number
    ) {
        return this.competitionService.getCompetition(id);
    }

}
