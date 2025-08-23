const user = require('../../models/user.js');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.register = async (req, res) => {

    const password = await bcrypt.hash(req.body.password, saltRounds);

    var saveData = {
        name : req.body.name,
        email : req.body.email,
        password : password,
        mobile_number : req.body.mobile_number,
    }



    existingUser = await user.findOne({ email: req.body.email, deleted_at: null });
    if (existingUser) {
        const output = {
            _status: false,
            _message: 'Email already registered !!',       
            _data: []
        }
        res.send(output);
    }    


    const data = new user(saveData);

    await data.save()
        .then((result) => {
            var token = jwt.sign({ data: result }, process.env.JWT_SECRET_KEY);
            const output = {
                _status: true,
                _message: 'Registered Successfully !!',
                _token : token,
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


exports.login = async (req, res) => {

    var saveData = {
        email : req.body.email,
        deleted_at : null
    }

    await user.findOne(saveData) 
        .then(async(result) => {

            const password = await bcrypt.compare(req.body.password, result.password);
            
            if(password){
                if(result.status == false){
                    const output = {
                        _status: false,
                        _message: 'Your account is deactivated, Please Contact Support !!',
                        _data: []       
                    }
                    res.send(output);
                }else{
                var token = jwt.sign({ data: result }, process.env.JWT_SECRET_KEY);
                const output = {
                    _status: true,
                    _message: 'Logged-in Successfully !!',
                    _token : token,
                    _data: result
                }
                res.send(output);
                }
            }else{
                const output = {
                    _status: false,
                    _message: 'Invalid Password !!',
                    _data: []
                }
                res.send(output);
            }
            
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


// exports.view = async (req, res) => {

//     // const condition = {
//     //     deleted_at: null
//     // }

//     // if (req.body != undefined) {
//     //     if (req.body.name) {
//     //         condition.name = req.body.name;
//     //     }
//     // }


//     var limit = 5;
//     var page = 1;
//     var skip = 0;

//     if (req.body != undefined) {
//         limit = req.body.limit ?? limit;

//         page = req.body.page ?? 1;

//         skip = (page - 1) * limit;
//     }



//     const addCondition = [
//         {
//             deleted_at: null,
//         }
//     ];

//     const orCondition = [];

    
//     if (req.body != undefined) {
//         if (req.body.name != undefined) {
//             if (req.body.name != '') {
//                 var name = new RegExp(req.body.name, 'i');
//                 orCondition.push({ name: name},{ code : name })
//             }
//         }
//     }

//     if (addCondition.length > 0) {
//         var filter = { $and: addCondition }
//     } else {
//         var filter = {}
//     }

//     if (orCondition.length > 0) {
//         filter.$or = orCondition;   
//     }

//     // console.log(filter);

//     var totalRecords = await color.find(filter).countDocuments();

//     await color.find(filter).select('_id name code order status').sort({
//         _id: 'descending'
//     })
//         .limit(limit).skip(skip)
//         .then((result) => {
//             if (result.length > 0) {
//                 const output = {
//                     _status: true,
//                     _message: 'Record Found !!',
//                     _pagination: {
//                         total_records: totalRecords,
//                         current_page: page,
//                         total_pages: Math.ceil(totalRecords / limit)
//                     },
//                     _data: result
//                 }
//                 res.send(output);
//             } else {


//                 const output = {
//                     _status: false,
//                     _message: 'No Record Found !!',
//                     _data: result
//                 }
//                 res.send(output);
//             }
//         })
//         .catch((error) => {
//             const output = {
//                 _status: false,
//                 _message: 'Something Went Wrong !!',
//                 _data: error
//             }
//             res.send(output);
//         })
// }

// exports.update = async (req, res) => {

//     await color.updateOne({
//         _id: req.params.id
//     }, {
//         $set: req.body
//     })

//         .then((result) => {
//             const output = {
//                 _status: true,
//                 _message: 'Updated Succesfully !!',
//                 _data: result
//             }
//             res.send(output);
//         })
//         .catch((error) => {

//             var errorMessage = [];

//             for (index in error.errors) {
//                 errorMessage.push(error.errors[index].message);
//             }

//             const output = {
//                 _status: false,
//                 _message: 'Something Went Wrong !!',
//                 _data: errorMessage
//             }
//             res.send(output);
//         })
// }

// exports.details = async (req, res) => {
//     // await color.findOne({
//     //     _id : req.params.id
//     // })

//     await color.findById(req.params.id)
//         .then((result) => {
//             if (result) {
//                 const output = {
//                     _status: true,
//                     _message: 'Record Found !!',
//                     _data: result
//                 }
//                 res.send(output);
//             } else {
//                 const output = {
//                     _status: false,
//                     _message: 'No Record Found !!',
//                     _data: result
//                 }
//                 res.send(output);
//             }
//         })
//         .catch((error) => {
//             const output = {
//                 _status: false,
//                 _message: 'Something Went Wrong !!',
//                 _data: error
//             }
//             res.send(output);
//         })
// }

// exports.changeStatus = async (req, res) => {
//     await color.updateMany({
//         _id: req.body.id
//     }, [{
//         $set: {
//             status : {
//                $not : '$status'
//             }
//         }
//     }])

//         .then((result) => {
//             const output = {
//                 _status: true,
//                 _message: 'Status Changed Succesfully !!',
//                 _data: result
//             }
//             res.send(output);
//         })
//         .catch((error) => {

//             var errorMessage = [];

//             for (index in error.errors) {
//                 errorMessage.push(error.errors[index].message);
//             }

//             const output = {
//                 _status: false,
//                 _message: 'Something Went Wrong !!',
//                 _data: errorMessage
//             }
//             res.send(output);
//         })
// }

// exports.destroy = async (req, res) => {
//     await color.updateMany({
//         _id: req.body.id
//     }, {
//         $set: {
//             deleted_at: Date.now()
//         }
//     })

//         .then((result) => {
//             const output = {
//                 _status: true,
//                 _message: 'Record Deleted Succesfully !!',
//                 _data: result
//             }
//             res.send(output);
//         })
//         .catch((error) => {

//             var errorMessage = [];

//             for (index in error.errors) {
//                 errorMessage.push(error.errors[index].message);
//             }

//             const output = {
//                 _status: false,
//                 _message: 'Something Went Wrong !!',
//                 _data: errorMessage
//             }
//             res.send(output);
//         })
// }