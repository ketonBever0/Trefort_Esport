const { protect: rpProtect } = require('../_middlewares/auth_middleware');

const expressRP = require('express');
const rpR = expressRP.Router();

const rpC = require('../_controllers/rolePermissionController');

rpR.get('/getuserpermissions', rpProtect, rpC.getPermissions);




module.exports = rpR;