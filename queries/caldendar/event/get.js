const event = require('../../../model/calendar/event');

async function byDate(date) {
    return await event.findOne({ date: date})
    .then(data => {
        
    })
}