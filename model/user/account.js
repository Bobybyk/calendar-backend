const mongoose = require('mongose');
const contact = require('../user/contact')

const calendarEventSchema = mongoose.Schema({
    contact: [contact],
    password: String
});

module.exports = mongoose.model('event', userAccountSchema);