import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserPatchDto } from './dto';

@Injectable({})
export class UserService {
    constructor(private prisma: PrismaService){}

    async modifyUserData(
        user: User,
        dto: UserPatchDto
    ): Promise<{ message: string}> {
        const updateUser = await this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                clanId: dto.clanId,
                orgId: dto.orgId,
                representative: dto.representative,
                username: dto.username,
                profilePicture: dto.profilePicture,
                firstName: dto.firstName,
                lastName: dto.lastName,
                password: dto.password,
                address: dto.address,
                educationNumber: dto.educationNumber,
                description: dto.description
            }
        });
        return {
            message: "Sikeres módosítás",
        };
    }

    async deleteUser(
        user: User
    ): Promise<{message: string}> {

        const deleteUser = this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                status: 'deleted'
            }
        });

        return {
            message: 'Felhasználó törölve'
        }
    }


}
