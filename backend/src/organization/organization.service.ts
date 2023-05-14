import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrganizationDto } from './dto';

@Injectable()
export class OrganizationService {
    constructor(private prisma: PrismaService){}

    async getOrg(paramId: number){
        try {

            const org = await this.prisma.organization.findUnique({
                where: {
                    id: paramId,
                }
            });

            return {
                org
            };

        } catch(err){
            throw new ForbiddenException('Hiba a lekérés közben');
        }
    }

    async getAllOrg(){
        try {
            const orgs = await this.prisma.organization.findMany({});
            return {
                orgs
            }
        } catch (error) {
            throw new ForbiddenException('Lekérési hiba')
        }
    }

    async signUpOrg(dto: OrganizationDto){
        try{
            const org = await this.prisma.organization.create({
                data: {
                    name: dto.name,
                    picture: dto.picture,
                    location: dto.location,
                    email: dto.email,
                    phoneNumber: dto.phoneNumber,
                    type: dto.type,
                    description: dto.description
                }
            });
            return {
                message: "Sikeres szervezet felvitel",
                org
            }
        } catch(err) {
            throw new ForbiddenException('Hiba a létrehozás során');
        }
    }

    async acceptOrg(paramId: number){
        try {
            const org = await this.prisma.organization.update({
                where: {
                    id: paramId,
                },
                data: {
                    status: 'active',
                }
            });
            return {
                message: 'Szervezet elfogadva',
                org
            }
        } catch (err) {
            throw new ForbiddenException('Valami hiba lépett fel a művelet közben');
        }
    }

    async updateOrg(paramId: number,dto: OrganizationDto){
        try {
            const org = await this.prisma.organization.update({
                where: {
                    id: paramId,
                },
                data: {
                    name: dto.name,
                    picture: dto.picture,
                    location: dto.location,
                    email: dto.email,
                    phoneNumber: dto.phoneNumber,
                    type: dto.type,
                    description: dto.description
                }
            });
            return {
                message: 'Sikeres módosítás',
                org
            }
        }catch (err) {
            throw new ForbiddenException('Valami hiba lépett fel módosítás során')
        }
    }

    async deleteOrg(paramId: number) {
        try {
            const org = await this.prisma.organization.update({
                where: {
                    id: paramId,
                },
                data: {
                    status: 'deleted',
                }
            });
            return {
                message: 'Szervezet sikeresen törölve',
                org
            }
        } catch (err) {
            throw new ForbiddenException('Valami hiba lépett fel a művelet közben');
        }
    }

}
