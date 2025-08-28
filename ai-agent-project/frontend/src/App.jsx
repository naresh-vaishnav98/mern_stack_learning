import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';

function App() {

  let [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
    .then((res) => {
      setMsg(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <h1>{msg}</h1>
      
    </>
  )
}

export default App
