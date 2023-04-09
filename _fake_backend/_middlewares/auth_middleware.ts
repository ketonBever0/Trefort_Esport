import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')

// const exclude = <User, Key extends keyof User>(
//     user: User,
//     keys: Key[]
// ): Omit<User, Key> => {
//     for (let key of keys) {
//         delete user[key]
//     }
//     return user
// }

export const protect = asyncHandler(async (req: any, res: any, next: any) => {
    let token: any;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const idFromToken = jwt.verify(token, process.env.JWT_SECRET);
            const queryUser: any | null = await prisma.user.findUnique({
                where: {
                    id: idFromToken
                }
            })

            if (queryUser != null) delete queryUser["password"];

            req.user = queryUser

            next();
        } catch (error) {
            res.status(401);
            throw new Error("Be kell jelentkezni!");
        }


    }

    if (!token) {
        res.status(401);
        throw new Error("Be kell jelentkezni!");

    }
})

// module.exports = protect;