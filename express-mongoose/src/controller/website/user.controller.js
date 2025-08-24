const user = require('../../models/user.js');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const nodemailer = require("nodemailer");


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

exports.myProfile = async (req, res) => {
    // console.log(req.headers.authorization);
    var token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, decoded) {
        if(err){
            const output = {
                _status: false,
                _message: 'Invalid Token !!',
                _data: err
            }
            res.send(output);
        }else{
            const output = {
                _status: true,
                _message: 'Token Verified !!',
                _data: decoded.data
            }
            res.send(output);
        }
    });

}


exports.updateProfile = async (req, res) => {
    // console.log(req.headers.authorization);
    var token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET_KEY, async function(err, decoded) {
        if(err){
            const output = {
                _status: false,
                _message: 'Invalid Token !!',
                _data: err
            }
            res.send(output);
        }else{

            saveData = {};

            if(req.body.name != undefined && req.body.name != ''){
                saveData.name = req.body.name;
            }
            if(req.body.mobile_number != undefined && req.body.mobile_number != ''){
                saveData.mobile_number = req.body.mobile_number;
            }
            // if(req.file.filename != undefined && req.file.filename != ''){
            //     saveData.image = req.file.filename; 
            // }

            await user.updateOne({
                _id : decoded.data._id
            },{
                $set : saveData
            })
            .then( (result) => {
                const output = {
                _status : true,
                _message : 'Profile Updated Succesfully !!',    
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
    });

}

exports.changePassword = async (req, res) => {
    console.log(req.headers.authorization);
    var token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET_KEY, async function(err, decoded) {
        if(err){
            const output = {
                _status: false,
                _message: 'Invalid Token !!',
                _data: err
            }
            res.send(output);
        }else{
            const password = await bcrypt.compare(req.body.current_password, decoded.data.password);
            if(password){
                if(req.body.new_password != req.body.confirm_password){
                    const output = {        
                        _status : false,
                        _message : 'New Password and Confirm Password does not match !!',   
                        _data : []
                    }
                    res.send(output);
                }else{
                    const password = await bcrypt.hash(req.body.new_password, saltRounds);

                    await user.updateOne({
                        _id : decoded.data._id
                    },{
                        $set : { password : password }
                    })
                    .then( (result) => {
                        const output = {
                        _status : true,
                        _message : 'Password Changed Succesfully !!',    
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
            }else{
                const output = {        
                    _status : false,
                    _message : 'Invalid Current Password !!',   
                    _data : []
                }
                res.send(output);
            }
        }
    });
}

exports.forgotPassword = async (req, res) => {
    // console.log(req.headers.authorization);
    var token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET_KEY, async function(err, decoded) {
        if(err){
            const output = {
                _status: false,
                _message: 'Invalid Token !!',
                _data: err
            }
            res.send(output);
        }else{

            existingUser = await user.findOne({ email: req.body.email, deleted_at: null });
            if (!existingUser) {
                const output = {
                    _status: false,     
                    _message: 'Email not registered !!',   
                    _data: []
                }
                res.send(output);
            }else{
                token = jwt.sign({ data: existingUser }, process.env.JWT_SECRET_KEY);
                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: process.env.ADMIN_EMAIL,
                        pass: process.env.ADMIN_PASSWORD,
                    },
                });     

                const info = await transporter.sendMail({
                    from: '"Monsta Furniture" <nareshvaishnav69@gmailcom>',
                    to: req.body.email, // list of receivers
                    subject: "Forgot Password",
                    // text: "Hello world?", // plain‑text body
                    html: "<b>Hello User, Your Link to Reset Passsword is listed below. Click the link to reset password</br></br></br><a href='http://localhost:3000/reset-password/"+token+"' > Click Here</a></b>", // html body

                }).then((info) => {
                    const output = {
                        _status: true,
                        _message: 'Reset Password link sent to your email, Please check !!',    
                        _data: info
                    }   
                    res.send(output);
                }).catch((error) => {
                    const output = {
                        _status: false,
                        _message: 'Something Went Wrong !!',    
                        _data: error
                    }   
                    res.send(output);
                });
            }
        }
    });

}

exports.resetPassword = async (req, res) => {
    // console.log(req.headers.authorization);
    var token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET_KEY, async function(err, decoded) {
        if(err){
            const output = {
                _status: false,
                _message: 'Invalid Token !!',
                _data: err
            }
            res.send(output);
        }else{
            
                if(req.body.new_password != req.body.confirm_password){
                    const output = {        
                        _status : false,
                        _message : 'New Password and Confirm Password does not match !!',   
                        _data : []
                    }
                    res.send(output);
                }else{
                    const password = await bcrypt.hash(req.body.new_password, saltRounds);

                    await user.updateOne({
                        _id : decoded.data._id
                    },{
                        $set : { password : password }
                    })
                    .then( (result) => {
                        const output = {
                        _status : true,
                        _message : 'Password Changed Succesfully !!',    
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
            
        }
    });
}



