import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrganizationDto } from './dto';

@Injectable()
export class OrganizationService {
    constructor(private prisma: PrismaService){}

    async signUpOrg(dto: OrganizationDto){
        const org = this.prisma.organization.create({
            data: {
                picture: dto.picture,
                location: dto.location,
                email: dto.email,
                phoneNumber: dto.phoneNumber,
                type: dto.type,
                status: dto.status,
                description: dto.description
            }
        });
        return org;
    }
}
