const express = require('express');
const { create, destroy, changeStatus, update, details, view } = require('../../controller/admin/color.controller');
const router = express.Router();

module.exports = server => {

    router.post('/create',create);

    router.post('/view',view);

    router.post('/details/:id',details);

    router.put('/update/:id',update);

    router.put('/change-status',changeStatus);

    router.put('/delete',destroy);

    server.use('/api/admin/color',router);
}