import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ toggleMenu }) => {
  return (
    <h1 className="flex items-center gap-4">
      <NavLink
        to="/"
        className="text-2xl md:text-3xl text-red-600 "
        onClick={toggleMenu}
      >
      Eshop
      </NavLink>
    </h1>
  );
};

export default Logo;
