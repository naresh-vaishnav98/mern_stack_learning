const mongoose = require('mongoose');


const colorschema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'Name is Required !!'],
        match: /^[a-zA-Z]{2,10}$/,
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
    code : {
        type : String,
        required: [true,'Code is required']
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

const colorModel = mongoose.model('colors', colorschema);

module.exports = colorModel;