const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    organizers: {
        type: Object,
        required: true,
    },
    name: {
        type: String,
        min: 3,
        max: 255,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    sponsor: {
        type: Object,
        required: false
    },
    description: {
        type: String,
        required: true
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;