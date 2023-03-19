const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: false,
    },
    picture: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    organizationType: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;