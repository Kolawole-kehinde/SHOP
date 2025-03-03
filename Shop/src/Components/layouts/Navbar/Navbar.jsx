import {NavLink, } from 'react-router-dom';
import { navRoutes } from '../../../constant/navRoutes';
import { useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import NavRight from '../NavRight';
import { BiMenuAltRight } from 'react-icons/bi';
import Logo from '../Logo';


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
    {/* <BiMenuAltRight onClick={() => SetVisible(true)} className='text-4xl lg:hidden cursor-pointer' /> */}
      {/* Mobile Menu */}
      {/* <div className={`fixed top-0 right-0 bottom-0 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out z-50 ${visible ? 'w-full' : 'w-0 overflow-hidden'}`}>
        <div className='flex flex-col text-gray-600 dark:text-white'>
          <div onClick={() => SetVisible(false)} className='flex items-center gap-3 p-3 cursor-pointer'>
            <IoMdArrowDropright className='text-2xl h-4 rotate-180' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => SetVisible(false)} className="py-2 pl-6 border-b" to="/">HOME</NavLink>
          <NavLink onClick={() => SetVisible(false)} className="py-2 pl-6 border-b" to="/shop">SHOP</NavLink>
          <NavLink onClick={() => SetVisible(false)} className="py-2 pl-6 border-b" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => SetVisible(false)} className="py-2 pl-6 border-b" to="/contact">CONTACT</NavLink>
        </div>
      </div> */}

        {
          openMenu && (
            <nav className='absolute inset-0 z-40'>
               <h1>hello</h1>
            </nav>
          )
        }
    </header>
  );
};

export default NavBar;
