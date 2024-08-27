const mongoose = require('mongose');
const contact = require('../contact')
const file = require('../file')

const calendarEventSchema = mongoose.Schema({
    name: String,
    description: String,
    date: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    timeZone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    recurrence: {
        type: String,
        required: false
    },
    participants: {
        participants: [contact.Schema],
        required: false
    },
    notification: {
        type: Number,
        status: Boolean,
        required: false,
    },
    attachments: {
        files: [file.Schema],
        required: false
    }
});

module.exports = mongoose.model('event', calendarEventSchema);