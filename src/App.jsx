import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Auth/Login";
import Shop from "./Pages/Shop";
import ProductPage from "./Pages/ProductPage";
import SearchBar from "./Components/SearchBar";
import Footer from "./Components/layouts/Footer";
import NavBar from "./Components/layouts/Navbar";
import CartPage from "./Pages/CartPage";
import RegistrationPage from "./Pages/Auth/Registration";
import CheckoutPage from "./Pages/CheckoutPage";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoute";
import OrdersList from "./Pages/OrdersList ";
import OrderDetails from "./Pages/OrderDetails";
import ProfilePage from "./Pages/ProfilePage";
import EditProfile from "./Pages/editPage";
import AccountSettings from "./Pages/AccountSettings";
import ChangePassword from "./Pages/ChangePassword";
import AboutUs from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-gray-900 dark:text-white duration-200">
      <NavBar />
      <SearchBar/>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:productId" element={<ProductPage />} />

        {/* Auth Routes (public) */}
        <Route path="auth" element={<Outlet />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="orders" element={<OrdersList />} />
          <Route path="orders/:orderId" element={<OrderDetails />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="settings" element={<AccountSettings />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
