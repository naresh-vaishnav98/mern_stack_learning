const http = require('http');
const { categories, products, singleProduct } = require('./data');

var server = http.createServer((request, response) => {
    // console.log(request.method)

    if(request.url == '/'){
        response.end('Server working Fine !!');
    } else if(request.url == '/api/view-categories'){
        if(categories.length > 0){
            const output = {
                _status : true,
                _message : 'Records found !!',
                _data : categories
            }    
            response.end(JSON.stringify(output));
        }else{
            const output = {
                _status : false,
                _message : 'No Records found !!',
                _data : []
            }
            response.end(JSON.stringify(output));
        }
        
        
    } else if(request.url == '/api/products'){
        if(products.length > 0){
            const output = {
                _status : true,
                _message : 'Products Records found !!',
                _data : products
            }
            response.end(JSON.stringify(output));    
        }else{        
            const output = {
                _status : false,
                _message : 'No Products Records found !!',
                _data : products
            }
            response.end(JSON.stringify(output));
        }
    } else if(request.url == '/api/product/1'){
        if(singleProduct == ''){
            const output = {
                _status : false,
                _message : 'No Product Record found !!',
                _data : singleProduct
            }
            response.end(JSON.stringify(output));
        }else{
            const output = {
                _status : true,
                _message : 'Product Records found !!',
                _data : singleProduct
            }
            response.end(JSON.stringify(output));
        }
        
    }else{
        response.end('Wrong URL !!, Please check URL.')
    }
});

server.listen(5000, ()=>{
    console.log('Server Working Fine !!');
});