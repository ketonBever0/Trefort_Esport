import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SignUpDto, SignInDto } from "./dto";
import * as argon from 'argon2';


@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService){}

    async signUp(dto: SignUpDto) {
        //generate password hash
        const hash = await argon.hash(dto.password);
        // save user in the db
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    password: hash,
                    username: dto.username,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    address: dto.address,
                    status: dto.status,
                },
                select: {
                    id: false,
                    clanId: false,
                    orgId: false,
                    representative: true,
                    username: true,
                    profilePicture: false,
                    email: true,
                    firstName: true,
                    lastName: true,
                    password: false,
                    address: true,
                    educationNumber: true,
                    status: false,
                    registrationDate: true,
                    lastLogin: false,
                    description: true,
                }
            });
            // return user for the front
            return user;
        } catch (error) {
            if(error.meta.target.includes('key')) {
                if(error.code === 'P2002') {
                    throw new ForbiddenException('Credentials taken');
                }
            }
        }
        
    }
    async signIn(dto: SignInDto) {

        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        });

        if(!user) throw new ForbiddenException('Credentials incorrect');
        
        const pwMatches = await argon.verify(user.password, dto.password);

        if(!pwMatches) throw new ForbiddenException('Credentials incorrect');

        return user;
    }
}