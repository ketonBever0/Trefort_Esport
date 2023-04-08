const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dotenv = require('dotenv');
dotenv.config()

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


app.get('/', (req: any, res: any) => res.send('fake_api'));


app.get('/posts', async (req: any, res: any) => {
    const posts = await prisma.post.findMany({
        include: {
            author: true,
        }
    });
    res.json(posts);
})







app.listen(process.env.BACKEND_PORT, () => console.log("Running!"));