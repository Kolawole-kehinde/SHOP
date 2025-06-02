import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Auth/Login";
import Shop from "./Pages/Shop";
import ContactPage from "./Pages/Contact";
import AboutPage from "./Pages/About";
import ProductPage from "./Pages/ProductPage";
import SearchBar from "./Components/SearchBar";
import Footer from "./Components/layouts/Footer";
import NavBar from "./Components/layouts/Navbar";
import CartPage from "./Pages/CartPage";
import RegistrationPage from "./Pages/Auth/Registration";
import CheckoutPage from "./Pages/CheckoutPage";
import OrderDetails from "./Pages/OrderLists";

const App = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-gray-900 dark:text-white duration-200">
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="auth" element={<Outlet />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>

        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrderDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
