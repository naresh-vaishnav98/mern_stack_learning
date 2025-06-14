import React,{ createContext, useState } from 'react'



const commonContext = createContext();

export default function Context({children}) {


    var cartData = JSON.parse(localStorage.getItem('cartItems'));


    const [cartItems, setCartItems] = useState(cartData ? cartData : []);
    const [wishlistItems, setwishlistItems] = useState([]);

    const userLogin = localStorage.getItem('user_uid'); 
    const [isLogin,setIsLogin] = useState(userLogin);

    const data = {cartItems, setCartItems, wishlistItems, setwishlistItems, isLogin, setIsLogin}

  return (
    <>
      <commonContext.Provider value={data}>
        {children}
      </commonContext.Provider>
    </>
  )
}

export {commonContext}