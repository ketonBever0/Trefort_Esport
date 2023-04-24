import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserPatchDto } from './dto';

@Injectable({})
export class UserService {
    constructor(private prisma: PrismaService){}

    async getSingleUser(paramId: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: paramId
            }
        });

        delete user.password;

        return {
            user
        }
    }

    async getAllUsers(){
        const users = await this.prisma.user.findMany({
            select: {
                username: true,
                profilePicture: true,
                email: true,
                firstName: true,
                lastName: true,
                address: true,
                educationNumber: true,
                registrationDate: true,
                lastLogin: true,
                description: true,
            }
        });

        return {
            users
        }

    }

    async updateUserData(
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

        const deleteUser = await this.prisma.user.update({
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
