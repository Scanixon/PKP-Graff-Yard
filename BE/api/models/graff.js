const mongoose = require('mongoose');

const graffSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    image: {type: String, required: true}
});

module.exports = mongoose.model('Graff', graffSchema);