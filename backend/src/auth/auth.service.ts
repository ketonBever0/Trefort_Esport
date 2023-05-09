import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SignUpDto, SignInDto } from "./dto";
import * as argon from 'argon2';
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";


@Injectable({})
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
    ){}

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
                    educationNumber: dto.educationNumber || null,
                    description: dto.description || null,
                },
            });

            const token = await this.signToken(user.id, user.email);

            return {
                success: true,
                mesage: "Sikeres regisztráció",
                access_token: token
            }
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

        // update the last login date for the user
        await this.prisma.user.update({
            where: {
                id: user.id,
            }, data: {
                lastLogin: new Date()
            }
        });
        const token = await this.signToken(user.id, user.email);
        
        return {
            access_token: token
        }
    }

    async signToken(userId: number, email: string){
        const payload = {
            sub: userId,
            email: email
        };
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '1d',
            secret: secret
        });

        return token;
    }
}