const express = require('express');
const { categories, products, singleProduct } = require('./data');
const server = express();

server.get('/', (req,res) => {
    res.send('Server Working Fine');
})

server.get('/api/view-categories', (req , res) => {
    if(categories.length > 0){
        const output = {
            _status : true,
            _message : 'Records Found !!',
            _data : categories
        }
        res.send(output);
    }else{
        const output = {
            _status : false,
            _message : 'No Records Found !!',
            _data : categories
        }
        res.send(output);
    }
})

server.get('/api/products', (req , res) => {
    if(products.length > 0){
        const output = {
            _status : true,
            _message : 'Records Found !!',
            _data : products
        }
        res.send(output);
    }else{
        const output = {
            _status : false,
            _message : 'No Records Found !!',
            _data : products
        }
        res.send(output);
    }
})

server.get('/api/product/1', (req , res) => {
    if(singleProduct != ''){
        const output = {
            _status : true,
            _message : 'Records Found !!',
            _data : singleProduct
        }
        res.send(output);
    }else{
        const output = {
            _status : false,
            _message : 'No Records Found !!',
            _data : singleProduct
        }
        res.send(output);
    }
})


server.listen(5100, () => {
    console.log('Server Working Fine')
})