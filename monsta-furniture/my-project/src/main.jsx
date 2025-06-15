import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import '../public/CSS/style.CSS'
import Layout from './Components/Layout';
import Home from './Components/Home';


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
        </Route>
      </Routes>    
    </BrowserRouter>
)
