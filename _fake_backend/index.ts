const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require('path');

const fileUpload = require("express-fileupload");
app.use(fileUpload());

const dotenv = require('dotenv');
dotenv.config();

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

const r = express.Router();
const { protect } = require('./_middlewares/auth_middleware');

app.use('/api/user', require('./_routes/userRoutes'));
app.use('/api/post', require('./_routes/postRoutes'));
app.use('/api/rolepermissions', require('./_routes/rolePermissionRoutes'));
app.use('/api/events', require('./_routes/eventRoutes'));


const { errorHandler: errorMain } = require('./_middlewares/error_middleware');
app.use(errorMain);


app.get('/', (req: any, res: any) => res.send('fake_api'));


app.listen(process.env.BACKEND_PORT || 8000, () => console.log("Running!"));