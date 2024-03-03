import React, {createContext, useState, useEffect } from "react";
import all_product from "../component/Assest/allProduct";


export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};


const ShopContextProvider = (props) =>{

   const [cartItem, setCartItem] = useState(getDefaultCart)
   
    useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);


  const increment = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const addToCart = (itemId) => {
    setCartItem((prev) => {
      if (prev[itemId] === 0) {
        return { ...prev, [itemId]: 1 };
      } else {
        return prev;
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const removeAllItems = () => {
    setCartItem(getDefaultCart());
  };


    const contextValue = {all_product, cartItem, addToCart, removeFromCart, removeAllItems, increment}
    return(
     <ShopContext.Provider value={contextValue}>
       {props.children}
     </ShopContext.Provider>
    )
}

export default ShopContextProvider;