const asyncHandler = require('express-async-handler');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const getPosts = asyncHandler(async (req: any, res: any) => {
    const posts = await prisma.post.findMany({
        include: {
            author: true,
        }
    });
    res.json(posts);
})


const getPostById = asyncHandler(async (req: any, res: any) => {
    const post = await prisma.post.findFirst({
        include: {
            author: true,
        },
        where: {
            title: req.params.id
        }
    });
    if (post) {
        res.json(post);
        return;
    } else {
        res.status(404).json({ code: 404, message: "Bejegyzés nem található!" });
        return;
    }
})

interface PostType {
    title: string;
    content: string;
    published: boolean;
    authorId: number;
}

const createPost = asyncHandler(async (req: any, res: any) => {

    const { title, content } = req.body;

    const user = req.user;


    const userRolesQuery: Array<Object> | any | null = await prisma.user.findUnique({
        where: {
            id: user.id
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

    var permissions: Array<string> = [];

    const { userRoles } = userRolesQuery;

    if (userRoles.length > 1) {
        userRoles.forEach((i: any) => {
            // console.log(i.role);
            i.role.rolePermission.forEach((j: any) => {
                permissions.push(j.permission.name);
            });
        });
    } else {
        res.status(404);
        throw new Error("Ennek a felhasználónak nincsenek jogai!");
    }


    res.json(permissions);

    return;

    const post = await prisma.post.create({
        data: {
            title: title,
            content: content
        } as PostType
    });

    if (post) {
        res.json({ message: "Bejegyzés hozzáadva!" });
        return;
    } else {
        res.status(400);
        throw new Error("Hiba!");
    }

})

module.exports = {
    getPosts,
    getPostById,
    createPost
}