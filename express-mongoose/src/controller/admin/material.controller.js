const material = require('../../models/material.js');


exports.create = async (req,res) => {

    // var data = {
    //     name : req.body.material_name
    // }

    var data = new material(req.body);

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

        var errorMessage = [];

        for(index in error.errors){
            errorMessage.push(error.errors[index].message);
        }

        const output = {
            _status : false,
            _message : 'Something Went Wrong !!',
            _data : errorMessage
        }
        res.send(output);
    })

}

exports.view = async (req,res) => {

    var condition = {
        deleted_at: null,
    }

    if(req.body != undefined){
        if(req.body.name){
            condition.name = req.body.name;
        }
    }
    
    if(req.body != undefined){
        var limit = req.body.limit??5;
        
        var page = req.body.page??1;
        
        var skip = (page-1)*limit;
    }
    
    
    var totalRecords = await material.find(condition).countDocuments();

    await material.find(condition).sort({
        _id : 'descending'
    })
    .limit(limit).skip(skip)
    .then( (result) => {
        if(result.length > 0){
            const output = {
                _status : true,
                _message : 'Record Found !!',
                 _pagination : {
                    total_records : totalRecords,
                    current_page : page,
                    total_pages : Math.ceil(totalRecords/limit)
                },
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
    
    
    await material.updateOne({
        _id: req.params.id
    },{
        $set : req.body
    })
    .then( (result) => {
        const output = {
            _status : true,
            _message : 'Updated Succesfully !!',
            _data : result
        }
        res.send(output);
    })
    .catch( (error) => {

        var errorMessage = [];

        for(index in error.errors){
            errorMessage.push(error.errors[index].message);
        }

        const output = {
            _status : false,
            _message : 'Something Went Wrong !!',
            _data : errorMessage
        }
        res.send(output);
    })
}

exports.details = async (req,res) => {
    // await material.findOne({
    //     _id : req.params.id
    // })

    await material.findById(req.params.id)
    .then( (result) => {
        if(result){
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

exports.changeStatus = async (req,res) => {
    await material.updateMany({
        _id: req.body.id
    }, [{
        $set: {
            status : {
               $not : '$status'
            }
        }
    }])

        .then((result) => {
            const output = {
                _status: true,
                _message: 'Status Changed Succesfully !!',
                _data: result
            }
            res.send(output);
        })
        .catch((error) => {

            var errorMessage = [];

            for (index in error.errors) {
                errorMessage.push(error.errors[index].message);
            }

            const output = {
                _status: false,
                _message: 'Something Went Wrong !!',
                _data: errorMessage
            }
            res.send(output);
        })
}

exports.destroy = async (req,res) => {
    await material.updateMany({
        _id: req.body.id
    },{
        $set : {
            deleted_at: Date.now()
        }
    })
    .then( (result) => {
        const output = {
            _status : true,
            _message : 'Record Deleted Succesfully !!',
            _data : result
        }
        res.send(output);
    })
    .catch( (error) => {

        var errorMessage = [];

        for(index in error.errors){
            errorMessage.push(error.errors[index].message);
        }

        const output = {
            _status : false,
            _message : 'Something Went Wrong !!',
            _data : errorMessage
        }
        res.send(output);
    })
}