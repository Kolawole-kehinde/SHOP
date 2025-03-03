import {NavLink, } from 'react-router-dom';
import { navRoutes } from '../../../constant/navRoutes';
import { useState } from 'react';
import NavRight from '../NavRight';
import { BiMenuAltRight } from 'react-icons/bi';
import Logo from '../Logo';
import { IoClose } from "react-icons/io5";


const NavBar = () => {
  const [openMenu, SetOpenMenu] = useState(false);

  const toggleMenu = () => {
    return SetOpenMenu((prev) => !prev);
  }  

  const active =(isActive) => {
    return isActive ? "text-yellow-500" : "text-gray-500";
  }

  return (
    <header className=' bg-white dark:bg-gray-900 py-4 dark:text-white duration-200 relative z-40'>
      <div className='container flex justify-between items-center'>

        {/* Logo Section */}
        <Logo/>

        {/* Navbar Links for large screens */}
        <button className='lg:hidden block' onClick={toggleMenu}>
        <BiMenuAltRight fontSize={30}/>
        </button>
        <nav className="hidden lg:flex items-center gap-4 uppercase">
          {
            navRoutes.map(({name, path, id}) => (
              <NavLink
              key={id}
                to={path}
                className={({ isActive }) =>
                  `inline-block px-4 font-semibold  duration-200 ${
                    isActive ? "text-red-500" : "text-gray-500"
                  }`
                }
              >
                {name}
              </NavLink>
            

            ))
          }
         
         
        </nav>

        {/* Right Section */}
          <NavRight/>
      </div>


        {/* Hamburger Menu */}
        {
          openMenu && (
            <nav className='fixed inset-0 z-40 bg-gray-500 w-full h-[300px] text-white'>
               <div className='flex justify-between items-center p-4'>
               <Logo/>
                  <button onClick={toggleMenu}>
                <IoClose fontSize={30}/>
             </button>
               </div>
              
            </nav>
          )
        }
    </header>
  );
};

export default NavBar;
