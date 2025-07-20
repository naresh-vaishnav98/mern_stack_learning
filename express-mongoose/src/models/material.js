const mongoose = require('mongoose');


const materialschema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'Name is Required !!'],
        match: /^[a-zA-Z ]{2,15}$/,
        validate : {
            validator : async function (v) {
                const name = await this.constructor.findOne({
                    name : v
                });
                return !name;
            },
            message: props => 'This Name is already in use.'
        },
    },
    order : {
        type : Number,
        default : 0,
        min : 0,
        max : 1000
    },
    status : {
        type: Boolean,
        default : 1,
    },
    created_at : {
        type : Date,
        default : Date.now()
    },
    updated_at : {
        type : Date,
        default : Date.now()
    },
    deleted_at : {
        type : Date,
        default :''
    },
    
})

const materialModel = mongoose.model('matetrials', materialschema);

module.exports = materialModel;