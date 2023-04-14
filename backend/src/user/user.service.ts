import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}
    
    async getUserById(
        userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ): Promise <User | null> {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput
        });
    }
}
