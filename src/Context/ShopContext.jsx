import { createContext, useEffect, useState } from "react";
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
  const [user, setUser] = useState(LocalStorageService.getItem("auth") || null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch products using React Query
  const { data: products = [], isLoading: isProductsLoading, error: productsError } = useProducts();

  useEffect(() => {
    if (user) LocalStorageService.setItem("auth", user);
  }, [user]);

  const addToCart = (itemId, quantity = 1) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      if (!updatedCart[itemId]) {
        updatedCart[itemId] = quantity;
      } else {
        updatedCart[itemId] += quantity;
      }
      return updatedCart;
    });
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      LocalStorageService.clear();
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
  };

  return <shopContext.Provider value={value}>{props.children}</shopContext.Provider>;
};

export default ShopContextProvider;
