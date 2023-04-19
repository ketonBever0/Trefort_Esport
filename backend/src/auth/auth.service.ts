import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';


@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService){}

    async signup(dto: AuthDto) {
        //generate password hash
        const hash = await argon.hash(dto.password);
        // save user in the db
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
        // return saved user
        return user;
    }
    signin() {

        return {message: 'Sign in'}
    }
}