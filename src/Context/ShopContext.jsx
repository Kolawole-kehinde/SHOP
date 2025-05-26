import { createContext, useState } from "react";
import { products } from "../assets/asset";

export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // Add to Cart Function
  const addToCart = (itemId) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      if (!updatedCart[itemId]) {
        updatedCart[itemId] = 1;
      } else {
        updatedCart[itemId] += 1; 
      }
      return updatedCart;
    });
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (let quantity of Object.values(cartItems)) {
      totalCount += quantity;
    }
    return totalCount;
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
    addToCart,
    getCartCount,
  };

  return <shopContext.Provider value={value}>{props.children}</shopContext.Provider>;
};

export default ShopContextProvider;
