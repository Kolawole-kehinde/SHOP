import { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Logo from "./Logo";
import Menu from "./Menu";
import AuthMenu from "./AuthMenu";
import MobileMenu from "./MobileMenu";
import { useAuth } from "../../hooks/useAuth";
import { ShopContext } from "../../Context/ShopContext";
import { CartContext } from "../../Context/CartContext";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user } = useAuth();
  const { setShowSearch } = useContext(ShopContext);
  const { getCartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  const handleSearchClick = () => {
    setShowSearch(true);
    navigate("/shop");
  };

 

  return (
    <header
      className="container mx-auto  py-6"
    >
      <nav className="container mx-auto flex items-center justify-between px-4">
        <Logo />
        <Menu menuStyle="hidden lg:flex items-center gap-8 font-semibold uppercase" />

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="hidden md:block cursor-pointer">
              <CiSearch
                onClick={handleSearchClick}
                className="text-2xl text-gray-600 dark:text-gray-400"
              />
            </div>

            {/* Cart Icon (always visible) */}
            <div className="relative">
              <Link to="/cart">
                <IoCartOutline className="text-2xl text-gray-600 dark:text-gray-400" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-black dark:bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Auth/Register Button */}
          {user ? (
            <AuthMenu />
          ) : (
            <button
              className="hidden lg:block bg-primary px-6 py-2 rounded-md text-white font-semibold hover:bg-primary/90 transition duration-300"
              onClick={() => navigate("/auth/register")}
            >
              Register
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden block"
            aria-label="Toggle mobile menu"
            onClick={toggleMenu}
          >
            <BiMenuAltRight fontSize={30} />
          </button>
        </div>
      </nav>

      {/* Slide-In Mobile Menu */}
      <MobileMenu open={openMenu} toggleMenu={toggleMenu} user={user} />
    </header>
  );
};

export default NavBar;
