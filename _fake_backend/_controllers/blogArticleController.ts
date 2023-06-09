const asyncHandler = require('express-async-handler');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const { getUserPermissions } = require('../_functions');


const getPosts = asyncHandler(async (req: any, res: any) => {
    const posts = await prisma.post.findMany({
        include: {
            author: true,
        }
    });
    res.json(posts);
})


const getPostById = asyncHandler(async (req: any, res: any) => {

    const post = await prisma.post.findUnique({
        include: {
            author: true,
        },
        where: {
            id: parseInt(req.params.id)
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

    const { title, header, content } = req.body;

    const user = req.user;

    type PermissionResultType = {
        roles: Array<string>;
        permissions: Array<string>
    }
    const permissions: PermissionResultType = await getUserPermissions(user.id);


    if (!permissions.roles.includes('admin')) {
        if (!permissions.permissions?.includes('createPost')) {
            throw new Error('Na mennyé more haza magadnak! 😈😈');
        }
    }

    // res.json(permissions);

    const post = await prisma.post.create({
        data: {
            title: title,
            content: content,
            authorId: req.user.id
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