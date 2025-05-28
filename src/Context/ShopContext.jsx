
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/asset";
import LocalStorageService from "../utils/HandleLocalStorage";
import { useNavigate } from "react-router-dom";

export const shopContext = createContext({
   user: null,
  setUser: () => {},
  handleLogout: () => {},
});

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const { getItem, setItem, clear } = LocalStorageService;
  
  const [user, setUser] = useState(getItem("auth") || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) setItem("auth", user);
  }, [user]);

  // Add to Cart Function (with quantity)
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
    // Handle user logout
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
    user,
    setUser,
    handleLogout
  };

  return <shopContext.Provider value={value}>{props.children}</shopContext.Provider>;
};

export default ShopContextProvider;
