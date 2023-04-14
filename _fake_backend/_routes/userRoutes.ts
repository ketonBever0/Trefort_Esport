const { protect: userProtect } = require('../_middlewares/auth_middleware');

const expressUser = require('express');
const userR = expressUser.Router();

const userC = require('../_controllers/userController');

userR.post('/register', userC.register);
userR.post('/login', userC.login);
userR.get('/userdata', userProtect, userC.getUser);




module.exports = userR;