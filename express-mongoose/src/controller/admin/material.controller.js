const material = require('../../models/material.js');


exports.create = async (req,res) => {

    var data = {
        name : req.body.material_name
    }

    var data = new material(data);

    await data.save()
    .then( (result) => {
        const output = {
            _status : true,
            _message : 'Inserted Succesfully !!',
            _data : result
        }
        res.send(output);
    })
    .catch( (error) => {
        const output = {
            _status : false,
            _message : 'Something Went Wrong !!',
            _data : error
        }
        res.send(output);
    })

}

exports.view = async (req,res) => {


    await material.find()
    .then( (result) => {
        if(result.length > 0){
            const output = {
                _status : true,
                _message : 'Record Found !!',
                _data : result
            }
            res.send(output);
        } else {

        
            const output = {
                _status : false,
                _message : 'No Record Found !!',
                _data : result
            }
            res.send(output);
        }
    })
    .catch( (error) => {
        const output = {
            _status : false,
            _message : 'Something Went Wrong !!',
            _data : error
        }
        res.send(output);
    })
}

exports.update = async (req,res) => {

}

exports.details = async (req,res) => {

}

exports.changeStatus = async (req,res) => {

}

exports.destroy = async (req,res) => {

}