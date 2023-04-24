const asyncHandler = require('express-async-handler');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const { getUserPermissions } = require('../_functions');


const getEvents = asyncHandler(async (req: any, res: any) => {

    const events = await prisma.event.findMany({
        include: {
            organizers: true
        }
    });

    if (events) {
        res.json(events);
    } else {
        res.json({ message: "Hiba!" });
    }

})




module.exports = {
    getEvents
}