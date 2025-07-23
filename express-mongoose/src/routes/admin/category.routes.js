const express = require('express');
const { create, destroy, changeStatus, update, details, view } = require('../../controller/admin/category.controller');
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/category' })
const path = require('path');

module.exports = server => {

    
    

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/category')
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
    // var multiUpload = upload.array('images', 6);
    // var sinleMultipleUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 8 }]);


    router.post('/create', singleUpload, create);

    router.post('/view', upload.none(), view);

    router.post('/details/:id', upload.none(), details);

    router.put('/update/:id', upload.none(), update);

    router.put('/change-status', upload.none(), changeStatus);

    router.put('/delete', upload.none(), destroy);

    server.use('/api/admin/categories', router);
}