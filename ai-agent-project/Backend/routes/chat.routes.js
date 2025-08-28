const express = require("express");
const Chat = require("../models/Chat");
const { saveChat, getChat } = require("../controller/chat.controller");
const router = express.Router();



module.exports = server => {

        // Save chat
    router.post("/save-chat", saveChat);

    // Get chat history
    router.get("/get-chat", getChat);


    server.use('/api/chats', router);
}