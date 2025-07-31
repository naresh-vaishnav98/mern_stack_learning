const mongoose = require('mongoose');


const subCategoryschema = new mongoose.Schema({
    name : {
        type : String,
        // required : [true,'Name is Required !!'],
        // match: /^[a-zA-Z ]{2,15}$/,
        // validate : {
        //     validator : async function (v) {
        //         const name = await this.constructor.findOne({
        //             name : v
        //         });
        //         return !name;
        //     },
        //     message: props => 'This Name is already in use.'
        // },
    },
    image : {
        type : String,
        default : ''
    },
    parent_category_id : {
        type : String,
        default : ''
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

const subCategoryModel = mongoose.model('categories', subCategoryschema);

module.exports = subCategoryModel;