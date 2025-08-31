const chat = require('../model/chat.js');

exports.askAI = async (req, res) => {
    try {
        const userMessage = req.body.msg || "Hello Gemini";

        // 1. Fetch last few chats for context (limit 5 for example)
        const previousChats = await chat.find().sort({ createdAt: -1 }).limit(5);

        // 2. Convert chat history into Gemini format
        const history = [];
        previousChats.reverse().forEach(c => {
            history.push({ role: 'user', parts: [{ text: c.usermsg }] });
            history.push({ role: 'model', parts: [{ text: c.agentResponse }] });
        });

        // 3. Add the new user message
        history.push({ role: 'user', parts: [{ text: userMessage }] });

        // Google Gemini API
        const GOOGLE_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + process.env.GOOGLE_API_KEY;

        const response = await fetch(GOOGLE_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: history }),
        });

        const data = await response.json();

        const aiResponse =
            data?.candidates?.[0]?.content?.parts?.[0]?.text ||
            "Sorry, I couldn't process your request.";

        // Save chat in DB
        const newChat = new chat({
            usermsg: userMessage,
            agentResponse: aiResponse
        });

        const savedChat = await newChat.save();

        // Final single response
        res.send({
            _status: true,
            _message: "AI Response fetched & saved successfully !!",
            _data: {
                usermsg: userMessage,
                agentResponse: aiResponse,
                saved: savedChat
            }
        });

    } catch (err) {
        res.send({
            _status: false,
            _message: "Something Went Wrong !!",
            _data: err.message
        });
    }
};
