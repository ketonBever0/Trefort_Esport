import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ClanService } from './clan.service';
import { JwtGuard } from 'src/auth/guard';
import { ClanDto } from './dto';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('clans')
export class ClanController {
    constructor(private clanService: ClanService) {}

    @Get('all')
    async getClans() {
        return this.clanService.getClans();
    }

    @Post()
    async createClan(
        @Body() dto: ClanDto,
        @GetUser() user: User
    ) {
        return this.clanService.createClan(dto, user);
    }

    @Get(':id')
    getClan(
        @Param('id', new ParseIntPipe())
        id: number
    ){
        return this.clanService.getClanById(id);
    }

}
