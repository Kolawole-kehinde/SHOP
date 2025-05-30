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
});

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // Destructure LocalStorageService methods BEFORE using them
  const { getItem, setItem, clear } = LocalStorageService;

  // Initialize user state from localStorage
  const [user, setUser] = useState(getItem("auth") || null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch products using your custom React Query hook
  const { data: products = [], isLoading: isProductsLoading, error: productsError } = useProducts();

  // Sync user state to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      setItem("auth", user);
    } else {
      // If user is null (logged out), clear auth from localStorage
      LocalStorageService.removeItem("auth");
    }
  }, [user, setItem]);

  // Add items to cart
  const addToCart = (itemId, quantity = 1) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      if (!updatedCart[itemId]) {
        updatedCart[itemId] = quantity;git
      } else {
        updatedCart[itemId] += quantity;
      }
      return updatedCart;
    });
  };

  // Get total quantity in cart
  const getCartCount = () => {
    return Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);
  };

  // Logout handler
  const handleLogout = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      clear(); // clear localStorage completely
      navigate("/auth/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const value = {
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
    getCartCount,
    user,
    setUser,
    handleLogout,
    loading,
  };

  return <shopContext.Provider value={value}>{props.children}</shopContext.Provider>;
};

export default ShopContextProvider;
