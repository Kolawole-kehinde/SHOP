import React, { useContext } from 'react';
import { CiSearch, CiUser } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import DarkMode from '../DarkMode';
import { Link, useNavigate } from 'react-router-dom';
import { shopContext } from '../Context/ShopContext';


const NavRight = () => {
  const { setShowSearch, getCartCount } = useContext(shopContext);
  const navigate = useNavigate();

  return (
    <div className='hidden md:flex justify-between items-center gap-4'>

      {/* Search Bar Section */}
      <div className='relative group'>
        <CiSearch 
          onClick={() => navigate("shop")}
          className='text-2xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-300'
        />
      </div>

      {/* Profile Icon */}
      <div className='group relative z-50'>
        <Link to='auth/Login'>
          <CiUser className='text-xl cursor-pointer' />
        </Link>
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
          <p className='w-4 h-4 bg-black text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
          {getCartCount()}
          </p>
        </Link>
      </div>

      {/* Dark Mode */}
      <div>
        <DarkMode />
      </div>

    </div>
  );
}

export default NavRight;
