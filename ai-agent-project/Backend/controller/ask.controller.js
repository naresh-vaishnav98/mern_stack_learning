exports.askAI = async (req, res) => {
  try {
    const userMessage = req.body.msg || "Hello Gemini";
    // const HF_API_URL = "https://api-inference.huggingface.co/models/microsoft/Phi-3-mini-4k-instruct";
    const GOOGLE_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key="+process.env.GOOGLE_API_KEY; // simpler model for testing

    const response = await fetch(GOOGLE_API_URL, {
      method: "POST",
      headers: {
        // "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          contents: [
            { parts: [{ text: userMessage }] }
          ]
        }),
    });

    // Read body once as text
    const data = await response.json();

    const aiResponse =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't process your request.";

    res.send({
      _status: true,
      _message: "AI Response fetched successfully !!",
      _data: aiResponse
    });

  } catch (err) {
    res.send({
      _status: false,
      _message: "Something Went Wrong !!",
      _data: err.message
    });
  }
};
