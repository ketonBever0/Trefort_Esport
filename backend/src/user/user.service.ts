import { ForbiddenException, Injectable } from '@nestjs/common';
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
            }, 
            select: {
                username: true,
                profilePicture: true,
                email: true,
                firstName: true,
                lastName: true,
                userClan: {
                    select: {
                        clan: {
                            select: {
                                id: true,
                                name: true,
                            }
                        }
                    }
                },
                educationNumber: true,
                registrationDate: true,
                lastLogin: true,
                description: true,
            }
        });

        return {
            user
        }
    }

    async getAllUsers(){
        const users = await this.prisma.user.findMany({
            where: {
                status: 'active'
            },
            select: {
                id: true,
                username: true,
                profilePicture: true,
                email: true,
                firstName: true,
                lastName: true,
                userClan: {
                    select: {
                        clan: {
                            select: {
                                id: true,
                                name: true,
                            }
                        }
                    }
                },
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
    ) {
        const updateUser = await this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
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
            updateUser
        };
    }

    async uploadPicture(
        user: User,
        file: Express.Multer.File
    ) {
        try {
            const updateUser = await this.prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    profilePicture: file.filename
                }
            });
    
            delete updateUser.password;
    
            return {
                message: "Sikeres feltöltés",
                updateUser
            }   
        } catch (error) {
            throw new ForbiddenException('Nem sikerült a feltöltés');
        }
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
