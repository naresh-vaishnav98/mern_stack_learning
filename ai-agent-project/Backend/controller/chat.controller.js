const chat = require('../model/chat.js')

exports.saveChat = async (req, res) => {
    const newChat = new chat({
        usermsg: req.body.usermsg,
        agentResponse: req.body.agentResponse
    });

    await newChat.save()
    .then((result) => {
        const output = {
            _status: true,
            _message: 'Chat saved successfully !!',
            _data: result
        }
        res.send(output);
    })
    .catch((err) => {
        const output = {
            _status: false,
            _message: 'Something Went Wrong !!',
            _data: err
        }
        res.send( output );
    });
}


exports.getChat = async (req, res) => {
    
    chat.find()
    .sort({ createdAt: -1 })
    .limit(10)
    .then((result) => {
        const output = {
            _status: true,
            _message: 'Chat Fetched successfully !!',
            _data: result
        }
        res.send(output);
    })
    .catch((err) => {
        const output = {
            _status: false,
            _message: 'Something Went Wrong !!',
            _data: err
        }
        res.send( output );
    });
}