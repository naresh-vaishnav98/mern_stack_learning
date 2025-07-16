const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();


// parse requests of content-type - application/json
server.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

server.use(bodyParser.json());
server.use(cors());



server.get('/', (req,res) => {
    res.send('Server Working Fine !!');
})


// Admin API URls

require('./src/routes/admin/color.routes.js')(server);
require('./src/routes/admin/material.routes.js')(server);


server.listen(7002, () => {
    mongoose.connect('mongodb://127.0.0.1:27017/furniture')
  .then(() => console.log('Connected!'))
  .catch((error) => {
    console.log(error);
  });
}); 