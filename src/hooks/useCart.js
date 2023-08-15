import React from 'react';
import AppContext from "../context.js";

export const useCart= ()=> {
  const { itemsCart, setItemsCart, setCartOpened } = React.useContext(AppContext);
  const totalPrice = itemsCart.reduce((sum,obj)=> obj.price+sum ,0);
  return { itemsCart, setItemsCart, setCartOpened,totalPrice }
};