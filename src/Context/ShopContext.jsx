import React, { createContext, useEffect, useState } from "react";
import LocalStorageService from "../utils/HandleLocalStorage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useProducts } from "../hooks/useProducts";
import { supabase } from "../lib/supabaseClient";

export const ShopContext = createContext({
  user: null,
  setUser: () => {},
  handleLogout: () => {},
  products: [],
  isProductsLoading: false,
  productsError: null,
  currency: "$",
  delivery_fee: 10,
  search: "",
  setSearch: () => {},
  showSearch: false,
  setShowSearch: () => {},
  loading: false,
});

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { getItem, setItem, clear, removeItem } = LocalStorageService;

  const [user, setUser] = useState(getItem("auth") || null);

  const {
    data: products = [],
    isLoading: isProductsLoading,
    error: productsError,
  } = useProducts();

  // Sync user state with localStorage
  useEffect(() => {
    if (user) {
      setItem("auth", user);
    } else {
      removeItem("auth");
    }
  }, [user, setItem]);

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
    loading,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
