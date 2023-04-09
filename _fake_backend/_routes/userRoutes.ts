const express = require('express');
const r = express.Router();
const { protect } = require('../_middlewares/auth_middleware');

const c = require('../_controllers/userController');

r.post('/register', c.register);
r.post('/login', c.login);
r.get('/userdata', protect, c.getUser);




module.exports = r;