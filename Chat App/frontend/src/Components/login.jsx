import React, { useState } from 'react';
import axios from 'axios';

function Login({ setUser }) {
  const [loginName, setLoginName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [registerName, setRegisterName] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5002/api/auth/login', { name: loginName, password: loginPassword });
      console.log(res.data);
      setUser(res.data._data.name);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5002/api/auth/register', { name: registerName, password: registerPassword });
      alert('Registration successful. You can now log in.');
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <input placeholder="Name" onChange={e => setLoginName(e.target.value)} />
        <input placeholder="Password" type="password" onChange={e => setLoginPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>

      <div>
        <form onSubmit={handleRegister}>
          <h2>Register</h2>
          <input placeholder="Name" onChange={e => setRegisterName(e.target.value)} />
          <input placeholder="Password" type="password" onChange={e => setRegisterPassword(e.target.value)} />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default Login;
