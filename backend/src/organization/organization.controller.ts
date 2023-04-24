import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { OrganizationDto } from './dto';
import { OrganizationService } from './organization.service';

@UseGuards(JwtGuard)
@Controller('organizations')
export class OrganizationController {
    constructor(private orgService: OrganizationService){}

    @Get(':id')
    getOrg(
        @Param('id', new ParseIntPipe())
        id: number
    ){
        return this.orgService.getOrg(id);
    }

    @Get()
    getAllOrg() {
        return this.orgService.getAllOrg();
    }

    @Post()
    signUpOrg(@Body() dto: OrganizationDto) {
        return this.orgService.signUpOrg(dto);
    }

    @Patch(':id')
    updateOrg(
        @Body() dto: OrganizationDto,
        @Param('id', new ParseIntPipe())
        id: number
    ) {
        return this.orgService.updateOrg(id, dto);
    }

    @Delete(':id')
    deleteOrg(
        @Param('id', new ParseIntPipe())
        id: number
    ) {
        return this.orgService.deleteOrg(id);
    }
}
