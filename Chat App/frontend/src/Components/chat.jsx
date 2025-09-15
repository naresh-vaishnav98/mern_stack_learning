import React, { useState, useEffect } from 'react';

function Chat({ socket, user }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receiveMessage', (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, [socket]);

  const sendMessage = () => {
    const data = { user, message };
    socket.emit('sendMessage', data);
    setMessage('');
  };

  return (
    <div>
      <h2>Chat</h2>
      <div style={{ border: '1px solid black', height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index}><strong>{msg.user}:</strong> {msg.message}</div>
        ))}
      </div>
      <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Type a message" />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
