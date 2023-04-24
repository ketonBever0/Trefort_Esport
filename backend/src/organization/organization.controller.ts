import { Body, Controller, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { ModOrdDto, OrganizationDto } from './dto';
import { OrganizationService } from './organization.service';

@UseGuards(JwtGuard)
@Controller('organizations')
export class OrganizationController {
    constructor(private orgService: OrganizationService){}

    @Post('signuporg')
    signUpOrg(@Body() dto: OrganizationDto) {
        return this.orgService.signUpOrg(dto);
    }

    @Patch('')
    updateOrg(@Body() dto: ModOrdDto) {
        return this.orgService.updateOrg(dto);
    }
}