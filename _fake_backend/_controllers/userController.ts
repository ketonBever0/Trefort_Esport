const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const fs = require('fs');
const { dirname } = require('path')!;
const appDir = dirname(require?.main?.filename);

import { PrismaClient } from '@prisma/client';
import { PermissionResultType } from '../_functions';
const prisma = new PrismaClient();

const { getUserPermissions } = require('../_functions');
const { PermissionResultType } = require('../_functions');

interface UserType {
    id: number;
    email: string;
    username: string;
    password: string;
    profilePicture: string | undefined;
    firstName: string;
    lastName: string;
    address: string;
    educationIdNum: number | undefined;
    status: string | undefined;
    registrationDate: Date | undefined;
    lastLoginDate: Date | undefined;
}

const genToken = (id: Number) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_LIFETIME });
}



const register = asyncHandler(async (req: any, res: any) => {

    // const { email, username, password, firstName, lastName, address, educationIdNum } = req.body;

    var { form } = req.body
    form = JSON.parse(form);

    const file: any = req.files

    // console.log(form)
    // console.log(file)

    // console.log(appDir)

    // if (file != null) {

    const path = appDir + '/files/user_profile_pictures/';

    if (!fs.existsSync(path)) {
        fs.mkdir(path, { recursive: true }, (err: any) => {
            err && console.log(err);
            // throw new Error("Mappalétrehozás nem sikerült");
        })
    }

    // file.mv(`${path}/${form.username}_profile_picture`);

    // console.log(path.extname(file.file.name))






    // }

    res.json({})


    // const usernameExists = await prisma.user.findUnique({
    //     where: {
    //         username: username
    //     } as UserType
    // })
    // if (usernameExists) {
    //     res.status(400);
    //     throw new Error("A felhasználónév foglalt!");
    // }

    // const emailExists = await prisma.user.findUnique({
    //     where: {
    //         email: email
    //     }
    // })
    // if (emailExists) {
    //     res.status(400);
    //     throw new Error("Az e-mail cím foglalt!");
    // }


    // const hashedPassword = await bcrypt.hash(password, 10);
    // const user = await prisma.user.create({
    //     data: {
    //         email: email,
    //         username: username,
    //         password: hashedPassword,
    //         firstName: firstName,
    //         lastName: lastName,
    //         address: address,
    //         educationIdNum: educationIdNum,
    //         lastLoginDate: undefined

    //     } as UserType

    // })

    // res.json(user);
    // return;



})


const login = asyncHandler(async (req: any, res: any) => {
    // res.send("Login");
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email: email
        } as UserType
    });
    if (!user) {
        res.status(400);
        throw new Error("Ezzel az e-mail címmel nem regisztrált felhasználó!");
    }
    if (!await bcrypt.compare(password, user.password)) {
        res.status(400);
        throw new Error("Hibás jelszó!");
    }

    // console.log(user.id);

    const token = genToken(user.id);

    res.json(token);

});


const getUser = asyncHandler(async (req: any, res: any) => {
    const permissions: PermissionResultType = await getUserPermissions(req.user.id);
    res.json({
        user: req.user,
        permissions: permissions
    });
})


const getOtherUser: any | null = asyncHandler(async (req: any, res: any) => {

    const { username } = req.params;

    const user = await prisma.user.findUnique({
        where: {
            username: username
        },
        select: {
            email: true,
            username: true,
            profilePicture: true,
            firstName: true,
            lastName: true,
            address: true,
            educationIdNum: true,
            status: true,
            registrationDate: true,
            lastLoginDate: true,
            memberOfOrganization: true,
            memberOfClan: true,
            creatorOfClan: true,
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
                            },
                        }
                    }
                }
            }
        }
    })

    if (user) {
        res.json(user);
    } else {
        throw new Error("Felhasználó nem található!");
    }

})




module.exports = {
    register,
    login,
    getUser,
    getOtherUser
}