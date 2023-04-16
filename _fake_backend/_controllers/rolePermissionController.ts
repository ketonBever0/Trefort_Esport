const asyncHandler = require('express-async-handler');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const { getUserPermissions } = require('../_functions');


const getPermissions = asyncHandler(async (req: any, res: any) => {
    const permissions = await getUserPermissions(req.user.id);
    res.json(permissions);
})



module.exports = {
    getPermissions
}