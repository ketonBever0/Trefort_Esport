const { protect: eventProtect } = require('../_middlewares/auth_middleware');

const expressEvent = require('express');
const eventR = expressEvent.Router();

const eventC = require('../_controllers/eventController');

eventR.get('/allevents', eventC.getEvents);
eventR.get('/event/:id', eventC.getEventById);




module.exports = eventR;