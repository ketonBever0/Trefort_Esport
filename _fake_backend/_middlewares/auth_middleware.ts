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
    // console.log(req.headers);

    if (req.headers.authorization != undefined && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const idFromToken = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(idFromToken);
            const queryUser: any | null = await prisma.user.findUnique({
                where: {
                    id: idFromToken.id
                }
            })

            if (queryUser != null) delete queryUser["password"];
            console.log(queryUser);
            req.user = queryUser;

            next();
        } catch (error) {
            res.status(401);
            throw new Error("Egyéb hiba!");
        }

    }

    if (!token) {
        res.status(401);
        throw new Error("Be kell jelentkezni!");

    }
})

// module.exports = protect;