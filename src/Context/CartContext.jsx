import { createContext, useEffect, useState } from "react";
import LocalStorageService from "../utils/HandleLocalStorage";

export const CartContext = createContext({
  cartItems: {},
  setCartItems: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getCartCount: () => 0,
});

const CartContextProvider = ({ children }) => {
  const { getItem, setItem, removeItem } = LocalStorageService;

  const [cartItems, setCartItems] = useState(getItem("cart") || {});

  useEffect(() => {
    if (Object.keys(cartItems).length > 0) {
      setItem("cart", cartItems);
    } else {
      removeItem("cart");
    }
  }, [cartItems]);

  const addToCart = (id, quantity = 1) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + quantity,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: quantity,
    }));
  };

  const clearCart = () => {
    setCartItems({});
    removeItem("cart");
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
