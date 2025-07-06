const mongoose = require('mongoose');


const colorschema = new mongoose.Schema({
    name : {
        type : String,
    },
    code : {
        type : String
    }
})

const colorModel = mongoose.model('colors', colorschema);

module.exports = colorModel;