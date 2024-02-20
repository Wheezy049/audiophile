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


  // const [cartItem, setCartItem] = useState(() => {
  //   const storedCart = localStorage.getItem("cart");
  //   return storedCart ? JSON.parse(storedCart) : getDefaultCart();
  // });

  // useEffect(() => {
  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //     // Update local storage with the latest cart items before unmounting
  //     localStorage.setItem("cart", JSON.stringify(cartItem));
  //   };
  // }, []);

  // const handleBeforeUnload = () => {
  //   // Update local storage with the latest cart items before unloading
  //   localStorage.setItem("cart", JSON.stringify(cartItem));
  // };


  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const removeAllItems = () => {
    setCartItem(getDefaultCart());
  };


    const contextValue = {all_product, cartItem, addToCart, removeFromCart, removeAllItems}
    return(
     <ShopContext.Provider value={contextValue}>
       {props.children}
     </ShopContext.Provider>
    )
}

export default ShopContextProvider;