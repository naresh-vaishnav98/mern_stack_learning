import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from "react-router";
import './assets/CSS/style.css'
import ProductListing from './Components/ProductListing'
import Home from './Components/Home';
import RootLayout from './Components/RootLayout';
import ProductDetails from './Components/ProductDetails';
import CartListing from './Components/CartListing';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-listing/:slug?' element={<ProductListing/>}/>
        <Route path='/product-details/:id?'element={<ProductDetails/>}/>
        <Route path='/cart-listing/'element={<CartListing/>}/>
      </Route>
      
    </Routes>
  </BrowserRouter>
)

