const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BostonSchema = new Schema({
 
    name: String,
    address: String,
    phone: String,
    date: {
        type: String,
        default: Date.now()

    }

})
module.exports = mongoose.model('users', BostonSchema); 