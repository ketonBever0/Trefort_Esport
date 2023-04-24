import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private prisma: PrismaService
    ) {}

    matchRoles(roles: string[], userRole: string) {
        return roles.some((role) => role === userRole);
    }

    async canActivate(context: ExecutionContext) {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if(!roles) return true;
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const userRoles = await this.prisma.userRole.findMany({
            where: {
                userId: user.id
            },
            select: {
                role: true
            }
        });
        
        return userRoles.some(role => this.matchRoles(roles, role.role.name))
    }
}