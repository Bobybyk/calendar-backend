const mongoose = require('mongose');

const fileSchema = new Schema({
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('file', fileSchema);