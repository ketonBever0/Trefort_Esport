import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { DelOrgDto, ModOrdDto, OrganizationDto } from './dto';
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
        console.log('dsf')
        return this.orgService.getAllOrg();
    }

    @Post('signuporg')
    signUpOrg(@Body() dto: OrganizationDto) {
        return this.orgService.signUpOrg(dto);
    }

    @Patch('')
    updateOrg(@Body() dto: ModOrdDto) {
        return this.orgService.updateOrg(dto);
    }

    @Delete('')
    deleteOrg(@Body() dto: DelOrgDto) {
        return this.orgService.deleteOrg(dto);
    }
}
