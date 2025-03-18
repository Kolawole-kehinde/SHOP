import React from "react";
import Navbar from "./Components/layouts/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Auth/Login";
import RegisrationPage from "./Pages/Auth/Registration";
import Shop from "./Pages/Shop";
import ContactPage from "./Pages/Contact";
import AboutPage from "./Pages/About";
import ProductPage from "./Pages/ProductPage";
import SearchBar from "./Components/SearchBar";
import Footer from "./Components/layouts/Footer";
import NavBar from "./Components/layouts/Navbar/Navbar";
import CartPage from "./Pages/CartPage";

const App = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-gray-900 dark:text-white duration-200">
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />

          <Route path="auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisrationPage />} />
          </Route>

          
          <Route path="shop" element={<Shop/>} />
          <Route path="cart" element={<CartPage/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="contact" element={<ContactPage/>} />
          <Route path="product/:productId" element={<ProductPage />} />
        
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
