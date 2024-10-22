import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";
import DarkMode from '../DarkMode';

const Navbar = () => {
  const [visible, SetVisible] = useState(false);

  return (
    
    <div className=' bg-white dark:bg-gray-900 py-4 dark:text-white duration-200 relative z-40'>
        <div className='container flex justify-between items-center'>

          {/* Logo Section */}
          <div className='flex items-center gap-4'>
            <a href="/" className='text-2xl sm:text-3xl text-red-600 -tracking-widest'>EShop</a>
          </div>

          {/* Navbar Links for large screens */}
          <ul className="hidden lg:flex items-center gap-4 uppercase">
            <li>
              <NavLink to='/' className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop' className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Section */}
          <div className='flex justify-between items-center gap-4'>


            {/* Search Bar Section */}
            <div className='relative group hidden sm:block'>
              <input type="text" placeholder='search' className='search-bar' />
              <CiSearch className='text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-300' />
            </div>

            {/* Profile Icon */}
            <div className='group relative z-50'>
              <CiUser className='text-xl cursor-pointer' />
              {/* Dropdown Menu */}
              <div className='hidden group-hover:block absolute right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded shadow-lg z-50'>
                  <p className='cursor-pointer hover:text-black dark:hover:text-white text-center'>My Profile</p>
                  <p className='cursor-pointer hover:text-black dark:hover:text-white text-center'>Orders</p>
                  <p className='cursor-pointer hover:text-black dark:hover:text-white text-center'>Logout</p>
                </div>
              </div>
            </div>

            {/* Cart Icon */}
            <div className='relative p-2'>
            <Link to="/cart">
              <IoCartOutline className='text-2xl text-gray-600 dark:text-gray-400' />
              <p className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                4
              </p>
            </Link>
            </div>

            {/* Dark Mode */}
            <div>
              <DarkMode />
            </div>

            {/* Hamburger Menu */}
            <BiMenuAltRight onClick={() => SetVisible(true)} className='text-4xl lg:hidden cursor-pointer' />
          </div>
        </div>
    

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out z-50 ${visible ? 'w-full' : 'w-0 overflow-hidden'}`}>
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
      </div>
    </div>
  
  );
};

export default Navbar;
