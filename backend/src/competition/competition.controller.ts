import { Body, Controller, Post } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CompetitionDto } from './dto';

@Controller('competitions')
export class CompetitionController {
    constructor(private competitionService: CompetitionService) {}

    @Post()
    createCompetition(@Body() dto: CompetitionDto){
        
    }
}
