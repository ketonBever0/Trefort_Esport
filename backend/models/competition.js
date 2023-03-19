const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
    plannedStartDate: {
        type: Date,
        required: true,
    },
    starDate: {
        type: Date,
        required: false,
    },
    endDate: {
        type: Date,
        required: false,
    },
    name: {
        type: String,
        required: true,
        max: 255,
    },
    game: {
         type: String,
         required: true,
    },
    platform: {
        type: Object,
        required: true,
    },
    registrationStart: {
        type: Date,
        required: false,
    },
    registrationEnd: {
        type: Date,
        required: true,
    },
    competitionType: {
        type: String,
        max: 255,
    },
    description: {
        type: String,
    }
});

const Competition = mongoose.model('Competition', competitionSchema);

module.exports = Competition;