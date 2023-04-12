const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface UserType {
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

    const { email, username, password, firstName, lastName, address, educationIdNum } = req.body;


    const usernameExists = await prisma.user.findUnique({
        where: {
            username: username
        } as UserType
    })
    if (usernameExists) {
        res.status(400);
        throw new Error("A felhasználónév foglalt!");
    }

    const emailExists = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if (emailExists) {
        res.status(400);
        throw new Error("Az e-mail cím foglalt!");
    }


    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            email: email,
            username: username,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName,
            address: address,
            educationIdNum: educationIdNum,
            lastLoginDate: undefined

        } as UserType

    })

    res.json(user);
    return;
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

    res.status(200).json(token);

});


const getUser = async (req: any, res: any) => {
    res.json(req.user);
}




module.exports = {
    register,
    login,
    getUser
}