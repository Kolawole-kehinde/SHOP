import React, { createContext, useState, useEffect } from "react";
import LocalStorageService from "../utils/HandleLocalStorage";

export const CartContext = createContext({
  cartItems: {},
  addToCart: () => {},
  updateCartItemQuantity: () => {},
  removeFromCart: () => {},
  getCartCount: () => 0,
  buyNowItem: null,
  setBuyNowItem: () => {},
  clearCart: () => {},
  clearBuyNowItem: () => {},
});

export const CartProvider = ({ children }) => {
  const { getItem, setItem } = LocalStorageService;

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = getItem("cart");
    return storedCart && typeof storedCart === "object" ? storedCart : {};
  });

  const [buyNowItem, setBuyNowItem] = useState(null);

  // Save cart to localStorage when it changes
  useEffect(() => {
    setItem("cart", cartItems);
  }, [cartItems, setItem]);

  const addToCart = (itemId, quantity = 1) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      updated[itemId] = (updated[itemId] || 0) + quantity;
      return updated;
    });
    setBuyNowItem(null);
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (newQuantity <= 0) {
        delete updated[itemId];
      } else {
        updated[itemId] = newQuantity;
      }
      return updated;
    });
    setBuyNowItem(null);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });
    setBuyNowItem(null);
  };

  const clearCart = () => {
    setCartItems({});
  };

  const clearBuyNowItem = () => {
    setBuyNowItem(null);
  };

  const getCartCount = () =>
    Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);

  const value = {
    cartItems,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    getCartCount,
    buyNowItem,
    setBuyNowItem,
    clearCart,
    clearBuyNowItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
