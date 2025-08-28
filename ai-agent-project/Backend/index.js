const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
    res.send("API is running....");
});


require('./routes/chat.routes.js')(server);


server.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("AI Database connected"))  
    .catch((error) => {
        console.log(error);
    });
});
