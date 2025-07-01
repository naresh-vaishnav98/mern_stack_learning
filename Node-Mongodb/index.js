const express = require('express');
const dbconnection = require('./mongodb/dbConnect.js')

const server = express();


server.get('/', (req, res) => {
    res.send('Server Working Fine !!');
})

server.get('/add-color', async(req,res) => {
    const db = await dbconnection();

    db.collection('colors').insertOne({
        'name' : req.query.name, 
        'code' : req.query.code
    })
    .then((result) => {
        const output = {
            _status : true,
            _message : 'Inserted Successfully !!!',
            _data : result
        }
        res.send(output);
    })
    .catch(() => {
        const output = {
            _status : false,
            _message : 'Something Went Wrong !!',
            _data : result
        }
        res.send(output);
    })
})




server.get('/view-colors', async(req, res) => {
    const db = await dbconnection();

    db.collection('colors').find().toArray()
    .then( (result)=>{

        if(result.length > 0){
            const output = {
                _status : true,
                _message : 'Records Found !!',
                _data : result
            }
    
            res.send(output);
        }else{
            const output = {
                _status :  false,
                _message : 'No Records Found !!',
                _data : result
            }
    
            res.send(output);
        }
        
    })
    .catch( () => {
        const output = {
            _status :  false,
            _message : 'Something Went Wrong !!',
            _data : result
        }

        res.send(output);
    } )
})


server.listen(4100, () => {
    console.log('Server Working Fine !!');
})