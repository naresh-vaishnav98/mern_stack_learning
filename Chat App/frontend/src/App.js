import React, { useState } from 'react';
import io from 'socket.io-client';
import Chat from './Components/chat';
import Login from './Components/login';

const socket = io('http://localhost:5002');

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Chat socket={socket} user={user} />
      )}
    </div>
  );
}

export default App;
