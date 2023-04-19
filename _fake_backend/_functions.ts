const asyncHandler = require('express-async-handler');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getUserPermissions = asyncHandler(async (id: number) => {

    const userRolesQuery: any = () => {
        return new Promise(async (resolve, reject) => {
            const query = await prisma.user.findUnique({
                where: {
                    id: id
                },
                select: {
                    userRoles: {
                        select: {
                            role: {
                                select: {
                                    name: true,
                                    rolePermission: {
                                        select: {
                                            permission: {
                                                select: {
                                                    name: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });

            resolve(query?.userRoles);


        })
    }

    const roles: Array<any> = await userRolesQuery();

    if (!roles) {
        throw new Error("Felhasználó nem található!");
    }

    var userRoles: Array<string> = [];
    var permissions: Array<string> = [];

    if (roles.length > 0) {
        roles.forEach((i: any) => {
            userRoles.push(i.role.name);
            i.role.rolePermission.forEach((j: any) => {
                permissions.push(j.permission.name);
            });
        });
    }


    return {
        roles: userRoles,
        permissions: permissions
    };
})

module.exports = {
    getUserPermissions
}