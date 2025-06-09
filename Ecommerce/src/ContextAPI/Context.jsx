import React,{ createContext, useState } from 'react'



const commonContext = createContext();

export default function Context({children}) {


    var cartData = JSON.parse(localStorage.getItem('cartItems'));


    const [cartItems, setCartItems] = useState(cartData ? cartData : []);
    const [wishlistItems, setwishlistItems] = useState([]);
    const data = {cartItems, setCartItems, wishlistItems, setwishlistItems}

  return (
    <>
      <commonContext.Provider value={data}>
        {children}
      </commonContext.Provider>
    </>
  )
}

export {commonContext}