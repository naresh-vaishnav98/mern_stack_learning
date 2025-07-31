const subCategory = require('../../models/subCategory.js');


exports.create = async (req, res) => {

    // var saveData = req.file.filename;
    var data = new subCategory(req.body);

    // console.log(req.file);
    if (req.file) {
        data.image = saveData;
    }

    await data.save()
        .then((result) => {
            const output = {
                _status: true,
                _message: 'Inserted Succesfully !!',
                _image_path: process.env.SUB_CATEGORY_BASE_URL,
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

exports.view = async (req, res) => {

    var limit = 5;
    var page = 1;
    var skip = 0;

    if (req.body != undefined) {
        limit = req.body.limit ?? limit;

        page = req.body.page ?? 1;

        skip = (page - 1) * limit;
    }



    const addCondition = [
        {
            deleted_at: null,
        }
    ];

    const orCondition = [];


    if (req.body != undefined) {
        if (req.body.name != undefined) {
            if (req.body.name != '') {
                var name = new RegExp(req.body.name, 'i');
                orCondition.push({ name: name })
            }
        }
    }

    if (addCondition.length > 0) {
        var filter = { $and: addCondition }
    } else {
        var filter = {}
    }

    if (orCondition.length > 0) {
        filter.$or = orCondition;
    }

    // console.log(filter);

    var totalRecords = await subCategory.find(filter).countDocuments();

    await subCategory.find(filter).select('_id name image parent_category_id order status').sort({
        _id: 'descending'
    })
        .limit(limit).skip(skip)
        .then((result) => {
            if (result.length > 0) {
                const output = {
                    _status: true,
                    _message: 'Record Found !!',
                    _pagination: {
                        total_records: totalRecords,
                        current_page: page,
                        total_pages: Math.ceil(totalRecords / limit)
                    },
                    _data: result
                }
                res.send(output);
            } else {


                const output = {
                    _status: false,
                    _message: 'No Record Found !!',
                    _data: result
                }
                res.send(output);
            }
        })
        .catch((error) => {
            const output = {
                _status: false,
                _message: 'Something Went Wrong !!',
                _data: error
            }
            res.send(output);
        })
}

exports.update = async (req, res) => {

    await subCategory.updateOne({
        _id: req.params.id
    }, {
        $set: req.body
    })

        .then((result) => {
            const output = {
                _status: true,
                _message: 'Updated Succesfully !!',
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

exports.details = async (req, res) => {

    await subCategory.findById(req.params.id)
        .then((result) => {
            if (result) {
                const output = {
                    _status: true,
                    _message: 'Record Found !!',
                    _data: result
                }
                res.send(output);
            } else {
                const output = {
                    _status: false,
                    _message: 'No Record Found !!',
                    _data: result
                }
                res.send(output);
            }
        })
        .catch((error) => {
            const output = {
                _status: false,
                _message: 'Something Went Wrong !!',
                _data: error
            }
            res.send(output);
        })
}

exports.changeStatus = async (req, res) => {
    await subCategory.updateMany({
        _id: req.body.id
    }, [{
        $set: {
            status: {
                $not: '$status'
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

exports.destroy = async (req, res) => {
    await subCategory.updateMany({
        _id: req.body.id
    }, {
        $set: {
            deleted_at: Date.now()
        }
    })

        .then((result) => {
            const output = {
                _status: true,
                _message: 'Record Deleted Succesfully !!',
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