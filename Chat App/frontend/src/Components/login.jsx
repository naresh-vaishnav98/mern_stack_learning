import React, { useState } from 'react';
import axios from 'axios';

function Login({ setUser }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5002/api/auth/login', { name, password });
      console.log(res.data);
      setUser(res.data._data.name);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <>
        <div>
        <h2>Login</h2>
        <input placeholder="Name" onChange={e => setName(e.target.value)} />
        <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        </div>
        <div>
            <form action="">
                <h2>Register</h2>
                <input placeholder="Name" onChange={e => setName(e.target.value)} />
                <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
                <button onClick={async (e) => {
                    e.preventDefault();
                    try {
                        const res = await axios.post('http://localhost:5002/api/auth/register', { name, password });
                        alert('Registration successful. You can now log in.');
                    } catch (err) {
                        alert(err.response.data.error);
                    }
                }}>Register</button>
            </form>
        </div>
    </>
  );
}

export default Login;
