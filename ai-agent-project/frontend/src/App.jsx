import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';

function App() {

  let [msg, setMsg] = useState('');

  let [chatHistori, setChatHistory] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:5000/api/chats/get-chat')
      .then((res) => {
        setChatHistory(res.data._data.reverse());
        // console.log(res.data._data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [msg]);

  const sendMsg = async (e) => {
    e.preventDefault();
    let userMessage = e.target.userMsg.value ?? "Hello Gemini from React";
    e.target.userMsg.value = "";
    // console.log(userMessage + " from react");
    try {
      const response = await axios.post('http://localhost:5000/api/ai-generate/ask-ai', { msg: userMessage });
      console.log(response.data);
      setMsg(response.data._data.agentResponse);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  return (
    <>
      <div className='myapp'>
        <h1 className='head'>BABA AI</h1>
        {chatHistori.map((chat, index) => (
          <div key={index}>
            <h3>User: {chat.usermsg}</h3>
            <h4>Agent: {chat.agentResponse}</h4>
            <hr />
          </div>
        ))}
        <form action="" onSubmit={sendMsg}>
          <input type="text" defaultValue="" name='userMsg' autoComplete='off' />
          <button type='submit'>Send</button>
          {/* <h1>{msg}</h1> */}
        </form>

      </div>


    </>
  )
}

export default App
