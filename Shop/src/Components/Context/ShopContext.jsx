
import { createContext, useState } from "react";
import {products} from '../../assets/asset'
import { useEffect } from "react";

export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!itemId) {
      console.error("Invalid itemId ", { itemId});
      return; // Prevent adding undefined values
    }

    setCartItems((prevCart) => {
      const newCart = { ...prevCart };

      if (!newCart[itemId]) {
        newCart[itemId] = {};
      }

      newCart[itemId] = (newCart[itemId] || 0) + 1;

      console.log("Updated Cart:", newCart);
      return newCart;
    });
  };
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart
  };

  return (
    <shopContext.Provider value={value}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
