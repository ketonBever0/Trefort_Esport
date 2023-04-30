const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const fs = require('fs');
const dir = require('path')!;
const appDir = dir.dirname(require?.main?.filename);

import { PrismaClient } from '@prisma/client';
import { PermissionResultType } from '../_functions';
const prisma = new PrismaClient();

const { getUserPermissions } = require('../_functions');
const { PermissionResultType } = require('../_functions');

// interface UserType {
//     id: number;
//     email: string;
//     username: string;
//     password: string;
//     profilePicture: string | undefined;
//     firstName: string;
//     lastName: string;
//     address: string;
//     educationIdNum: number | undefined;
//     status: string | undefined;
//     registrationDate: Date | undefined;
//     lastLoginDate: Date | undefined;
// }

const genToken = (id: Number) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_LIFETIME });
}



const register = asyncHandler(async (req: any, res: any) => {
    // console.log(req.body)

    var { form } = req.body
    form = JSON.parse(form);
    // console.log(form)

    var { firstName, lastName, address, educationIdNum, username, email, password, description } = form;

    const usernameExists = await prisma.user.findUnique({
        where: { username: username },
        select: { username: true }
    })
    if (usernameExists) {
        res.status(400);
        throw new Error("A felhasználónév foglalt!");
    }

    const emailExists = await prisma.user.findUnique({
        where: { email: email },
        select: { email: true }
    })
    if (emailExists) {
        res.status(400);
        throw new Error("Az e-mail cím foglalt!");
    }


    // console.log(form)
    // console.log(file)

    // console.log(appDir)

    var filename = ""

    try {
        if (req.files != null) {

            const { file }: any = req.files

            const path = appDir + '/files/user_profile_pictures/';

            if (!fs.existsSync(path)) {
                fs.mkdir(path, { recursive: true }, (err: any) => {
                    err && console.log(err);
                    // throw new Error("Mappalétrehozás nem sikerült");
                })
            }

            filename = `${form.username}_profile_picture${dir.extname(file.name)}`

            file.mv(`${path}/${filename}`);

        }
    }
    catch {
        console.log("fájl hiba")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // console.log(educationIdNum)
    await prisma.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            address: address,
            educationIdNum: educationIdNum,
            username: username,
            email: email,
            password: hashedPassword,
            description: description,
            profilePicture: filename || null
        }
    })


    res.status(201).json({
        success: true,
        message: "Sikeres regisztráció!"
    });




})


const login = asyncHandler(async (req: any, res: any) => {
    // res.send("Login");
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
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


const checkIfUsernameExists = asyncHandler(async (req: any, res: any) => {

    const exists = await prisma.user.findUnique({
        where: { username: req.body.username },
        select: { username: true }
    })

    if (exists) {
        res.json({ exists: true, message: "Ez a felhasználónév nem elérhető!" })
        return;
    }
    else {
        res.json({ exists: false, message: "Ez a felhasználónév elérhető!" })
        return;
    }

})


const checkIfEmailExists = asyncHandler(async (req: any, res: any) => {

    const exists = await prisma.user.findUnique({
        where: { email: req.body.email },
        select: { email: true }
    })

    if (exists) {
        res.json({ exists: true, message: "Ez az e-mail címmel már regisztráltak!" })
        return;
    }
    else {
        res.json({ exists: false, message: "Ez az e-mail cím elérhető!" })
        return;
    }

})





module.exports = {
    register,
    login,
    getUser,
    getOtherUser,
    checkIfUsernameExists,
    checkIfEmailExists
}