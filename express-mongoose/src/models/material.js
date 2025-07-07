const mongoose = require('mongoose');


const materialschema = new mongoose.Schema({
    name : {
        type : String,
    },
    
})

const materialModel = mongoose.model('matetrials', materialschema);

module.exports = materialModel;