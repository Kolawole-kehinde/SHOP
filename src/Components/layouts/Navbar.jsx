import { useState } from "react";
import NavRight from "./NavRight";
import { BiMenuAltRight } from "react-icons/bi";
import Logo from "./Logo";
import { IoClose } from "react-icons/io5";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [openMenu, SetOpenMenu] = useState(false);

  const toggleMenu = () => {
    return SetOpenMenu((prev) => !prev);
  };
  return (
    <header className=" bg-white dark:bg-gray-900 py-4 dark:text-white duration-200 relative">
      <nav className="container flex justify-between items-center">
        <Logo />

        <Menu menuStyle="hidden lg:flex items-center gap-8 font-semibold uppercase" />

        {/* Right Section */}
        <div className="flex items-center justify-center gap-4">
          <NavRight />
         <Link to="/auth/register">
           <button className="bg-primary px-10 py-3 rounded-md text-white font-semibold hidden lg:block hover:bg-primary/90 duration-300">
            Sign In
          </button>
         </Link>
          <button className="lg:hidden block" onClick={toggleMenu}>
            <BiMenuAltRight fontSize={30} />
          </button>
        </div>
      </nav>

      {/* Hamburger Menu */}
      {openMenu && (
        <nav className="fixed inset-0 z-40 bg-gray-300 w-full h-[300px] rounded-2xl">
          <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-900">
            <Logo toggleMenu={toggleMenu} />
            <button onClick={toggleMenu}>
              <IoClose fontSize={30} />
            </button>
          </div>
          <Menu
            menuStyle="flex flex-col items-start space-y-6 p-4 text-xl"
            toggleMenu={toggleMenu}
          />
        </nav>
      )}
    </header>
  );
};

export default NavBar;
