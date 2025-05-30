import React, { useContext } from 'react';
import { CiSearch} from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { shopContext } from '../../Context/ShopContext';

const NavRight = () => {
  const { setShowSearch, getCartCount } = useContext(shopContext);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setShowSearch(true);
    navigate('/shop');
  };

  return (
    <div className='hidden md:flex justify-between items-center gap-4'>
      {/* Search Icon */}
      <div className='relative group cursor-pointer'>
        <CiSearch 
          onClick={handleSearchClick} 
          className='text-2xl text-gray-600 dark:text-gray-400'
        />
      </div>

      {/* Cart Icon */}
      <div className='relative p-2'>
        <Link to='/cart'>
          <IoCartOutline className='text-2xl text-gray-600 dark:text-gray-400' />
          <p className='w-4 h-4 bg-black dark:bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
            {getCartCount()}
          </p>
        </Link>
      </div>

  
      
    </div>
  );
};

export default NavRight;
