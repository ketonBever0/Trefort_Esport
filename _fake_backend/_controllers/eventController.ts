const asyncHandler = require('express-async-handler');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const { getUserPermissions } = require('../_functions');


const getEvents = asyncHandler(async (req: any, res: any) => {

    const events = await prisma.event.findMany({
        include: {
            organizers: {
                include: {
                    representative: true
                }
            }
        }
    });

    if (events) {
        res.json(events);
    } else {
        res.json({ message: "Hiba!" });
    }

})


const getEventById = asyncHandler(async (req: any, res: any) => {

    const { id } = req.params;

    const event = await prisma.event.findUniqueOrThrow({
        where: {
            id: parseInt(id)
        }
    })

    res.json(event);


})




module.exports = {
    getEvents,
    getEventById
}