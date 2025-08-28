const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    usermsg:{
        type: String,
        required: true,
    },
    agentResponse:{
        type: String,
        required: true,
    },
    created_at: {
        type: Date, 
        default: Date.now,
    }

})
module.exports = mongoose.model("Chat", chatSchema);