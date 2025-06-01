import React, { createContext, useEffect, useState } from "react";
import LocalStorageService from "../utils/HandleLocalStorage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useProducts } from "../hooks/useProducts";
import { supabase } from "../lib/supabaseClient";

export const shopContext = createContext({
  user: null,
  setUser: () => {},
  handleLogout: () => {},
  products: [],
  isProductsLoading: false,
  productsError: null,
  cartItems: {},
  addToCart: () => {},
  updateCartItemQuantity: () => {},
  removeFromCart: () => {},
  getCartCount: () => 0,
});

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { getItem, setItem, clear, removeItem } = LocalStorageService;

  const [user, setUser] = useState(getItem("auth") || null);

  const {
    data: products = [],
    isLoading: isProductsLoading,
    error: productsError,
  } = useProducts();

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = getItem("cart");
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    setItem("cart", cartItems);
  }, [cartItems, setItem]);

  // Sync user state with localStorage
  useEffect(() => {
    if (user) {
      setItem("auth", user);
    } else {
      removeItem("auth");
    }
  }, [user, setItem]);

  const addToCart = (itemId, quantity = 1) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      updated[itemId] = (updated[itemId] || 0) + quantity;
      return updated;
    });
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
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });
  };

  const getCartCount = () =>
    Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      clear();
      navigate("/auth/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    setUser,
    handleLogout,
    products,
    isProductsLoading,
    productsError,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    getCartCount,
    loading,
  };

  return <shopContext.Provider value={value}>{props.children}</shopContext.Provider>;
};

export default ShopContextProvider;
