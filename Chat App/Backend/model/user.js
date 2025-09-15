const mongoose = require('mongoose');


const userschema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'Name is Required !!'],
        match: /^[a-zA-Z ]{2,15}$/
    },
    // email : {
    //     type : String,
    //     required : [true,'Email is Required !!'],
    //     match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // },
    password : {
        type : String,
        required : [true,'Password is Required !!'],
    },
    // mobile_number : {
    //     type : String,
    //     required : [true,'Mobile Number is Required !!'],
    //     // match: /^[0-9]{8,15}$/
    // },
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

const userModel = mongoose.model('users', userschema);

module.exports = userModel;