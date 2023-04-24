import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {DelOrgDto, ModOrdDto, OrganizationDto } from './dto';

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

        }
    }

    async getAllOrg(){
        try {
            const orgs = await this.prisma.organization.findMany({});
            console.log(orgs)
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
                    picture: dto.picture,
                    location: dto.location,
                    email: dto.email,
                    phoneNumber: dto.phoneNumber,
                    type: dto.type,
                    status: dto.status,
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

    async updateOrg(dto: ModOrdDto){
        try {
            const org = await this.prisma.organization.update({
                where: {
                    id: dto.id,
                },
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
            return {
                message: 'Sikeres módosítás',
                org
            }
        }catch (err) {
            throw new ForbiddenException('Valami hiba lépett fel módosítás során')
        }
    }

    async deleteOrg(dto: DelOrgDto) {
        try {
            const org = await this.prisma.organization.update({
                where: {
                    id: dto.id,
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
