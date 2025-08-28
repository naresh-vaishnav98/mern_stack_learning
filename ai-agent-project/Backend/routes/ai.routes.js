const express = require("express");
// const Chat = require("../models/Chat");
const { askAI } = require("../controller/ask.controller");
const router = express.Router();



module.exports = server => {

    //     // Save chat
    // router.post("/save-chat", saveChat);

    // // Get chat history
    // router.get("/get-chat", getChat);
    
    // POST /api/ask
    router.post("/ask-ai",askAI);


    server.use('/api/ai-generate', router);
}