const express = require('express');
const { register,login, myProfile, updateProfile,changePassword, forgotPassword, resetPassword} = require('../../controller/website/user.controller');
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/users' })
const path = require('path');
require('dotenv').config();


module.exports = server => {


    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/users')
        },
        filename: function (req, file, cb) {
            var ext = path.extname(file.originalname);
            // console.log(ext);
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix + ext)
            // console.log(file);
        }

    })


    const upload = multer({ storage: storage })


    var singleUpload = upload.single('image');

    router.post('/register', upload.none(), register);
    router.post('/login', upload.none(), login);
    router.post('/my-profile', upload.none(), myProfile);
    router.post('/update-profile', upload.none(), updateProfile);
    router.post('/change-password', upload.none(), changePassword);
    router.post('/forgot-password', upload.none(), forgotPassword);
    router.post('/reset-password', upload.none(), resetPassword);

    server.use('/api/website/user', router);
}